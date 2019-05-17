import { UserService } from 'shared/services/user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth, 
    private router: ActivatedRoute, 
    private userService: UserService) { 
     this.user$ = afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  login(mode?){

    //get the value of queryParams if any
    let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  appUser$(){
    return this.user$
      .switchMap( user => {
        if (user) return this.userService.get( user.uid ).valueChanges();
        
        return Observable.of(null);
      });
  }
}
