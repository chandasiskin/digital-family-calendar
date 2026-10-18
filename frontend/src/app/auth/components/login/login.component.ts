import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestModel } from '../../models/login-request.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  private readonly authService = inject(AuthService);

  username: string = "";
  password: string = "";
  rememberMe: boolean = false;

  isLoading: boolean = false;
  errorMessage: string | null = null;

  onSubmit(): void {
    if (this.isLoading == true) return;

    this.isLoading = true;

    const loginRequest: LoginRequestModel = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    this.authService.login(loginRequest).subscribe({
      next: () => {
        this.authService.setAuthenticated(true);
        this.isLoading = false;
        this.errorMessage = 'Login success';
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Login failed';
      }
    })

    console.log(loginRequest);
  }
}
