import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BloggerAuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private route: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // verifies if token valid and if student and returns observable boolean
    return this.auth.verifyBlogger().pipe(switchMap((data) => {
      if (data === true) {
        return of(true);
      } else if (data === false) {
        return this.logout();
      }
    }));
  }

  private logout(): Observable<boolean> {
    if (AuthService.isLoggedIn()) {
      localStorage.removeItem('token');
    }
    this.route.navigate(['home']);
    return of(false);
  }

}
