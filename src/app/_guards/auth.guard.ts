import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthService,
              private alertifyService: AlertifyService,
              private router: Router) {
  }
  canActivate():  boolean{
    if(this.authService.loggedIn()){
      return true;
    }
    this.alertifyService.error('Please log in first');
    this.router.navigate(['/home'])
    return false;
  }
  
}
