import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from  "@angular/router";
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class LoginactivateService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
   
    return new Promise((resolve) => {
            if (this.authService.isLoggedIn) {
                resolve(true);
            } else {
                this.router.navigate(['login']);
                resolve(false);
            }
    });


  }
}


