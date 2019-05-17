import { AuthService } from 'shared/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private authService: AuthService) { }


  canActivate(): Observable<boolean>{
      return this.authService.appUser$()
        .map( appUser => appUser.isAdmin );
  }
}
