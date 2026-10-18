import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestModel } from '../../models/login-request.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  username: string = "";
  password: string = "";
  rememberMe: boolean = false;

  isLoading: boolean = false;
  errorMessage: string | null = null;

  onSubmit(): void {
    if (this.isLoading || !this.username.trim() || !this.password) return;

    this.isLoading = true;
    this.errorMessage = null;

    const loginRequest: LoginRequestModel = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    this.authService.login(loginRequest)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: () => this.router.navigate(['/index']),
        error: () => this.errorMessage = 'Invalid username or password'
      });
  }
}
