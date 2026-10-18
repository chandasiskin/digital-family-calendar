import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginRequestModel } from '../models/login-request.model';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  private readonly _isAuthenticated = signal(false);

  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  login(request: LoginRequestModel): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/login`, request, { withCredentials: true });
  }

  setAuthenticated(isAuthenticated: boolean): void {
    this._isAuthenticated.set(isAuthenticated);
  }

  checkAuthStatus(): Observable<boolean> {
    return this.http.get<void>(`${this.apiUrl}/status`, { withCredentials: true })
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  initializeAuth(): Observable<void> {
    return this.checkAuthStatus().pipe(
      tap((isAuthenticated) => this._isAuthenticated.set(isAuthenticated)),
      map(() => undefined)
    );
  }
}
