import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './authguard.service';
import { ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuardService implements CanActivate {
    // here you can inject your auth service to check that user is signed in or not
    constructor(private authService: AuthGuardService,private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isSignedIn()) {
        this.router.navigate(["/"]); // or home
        return false;
      }
      return true;
  constructor() { }
}
