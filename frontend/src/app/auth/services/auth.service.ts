import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginRequestModel } from '../models/login-request.model';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthStateModel } from '../models/auth-state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  private readonly _authState = signal<AuthStateModel>('unknown');

  readonly authState = this._authState.asReadonly();

  login(request: LoginRequestModel): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/login`, request, { withCredentials: true })
      .pipe(tap(() => this._authState.set('authenticated')));
  }

  checkAuthStatus(): Observable<AuthStateModel> {
    return this.http.get<void>(`${this.apiUrl}/status`, { withCredentials: true })
      .pipe(
        map((): AuthStateModel => 'authenticated'),
        catchError((error: HttpErrorResponse) => of<AuthStateModel>(
          error.status === 401
            ? 'unauthenticated'
            : 'unavailable'
        ))
      );
  }

  initializeAuth(): Observable<void> {
    return this.checkAuthStatus().pipe(
      tap((state) => this._authState.set(state)),
      map(() => undefined)
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this._authState.set('unauthenticated')),
        catchError((error: unknown) => {
          this._authState.set('unavailable');
          return throwError(() => error);
        })
      );
  };
}
