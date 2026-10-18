import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestModel } from '../../models/login-request.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  username: string = "";
  password: string = "";
  rememberMe: boolean = false;

  onSubmit(): void {
    const loginRequest: LoginRequestModel = {
      username: this.username,
      password: this.password
    };

    console.log(loginRequest);
  }
}
