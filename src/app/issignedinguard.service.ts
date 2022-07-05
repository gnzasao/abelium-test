import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssignedinguardService {
  @Injectable()
export class IsSignedInGuard implements CanActivate {
  // here you can inject your auth service to check that user is signed in or not
  constructor(private authService: AuthService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isSignedIn()) {
      this.router.navigate(["/"]); // or home
      return false;
    }
    return true;
  }
}

  constructor() { }
}
