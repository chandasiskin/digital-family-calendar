import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempNavComponent } from './temp-nav/temp-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TempNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'digital-family-calendar';
}
