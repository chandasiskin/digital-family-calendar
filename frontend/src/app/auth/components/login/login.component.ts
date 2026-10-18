import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    console.log(this.username, this.password, this.rememberMe);
  }
}
