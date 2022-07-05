const ROUTES = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor( public router: Router) { }

    canActivate(): boolean {

        if (sessionStorage.getItem('id') == null) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }
}