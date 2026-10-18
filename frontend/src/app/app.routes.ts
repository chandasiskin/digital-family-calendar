import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { authGuard } from './auth/guards/auth.guard';
import { guestGuard } from './auth/guards/guest.guard';

export const routes: Routes = [
    { path: 'index', canActivate: [authGuard], loadComponent: () => import('./calendar/components/calendar/calendar.component').then(c => c.CalendarComponent)},
    { path: 'login', canActivate: [guestGuard], component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'index'},
];
