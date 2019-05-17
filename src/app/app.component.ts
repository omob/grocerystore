import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showBanner: boolean = false;
  currentUrl: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router){

      authService.user$.subscribe( user => {
        if(!user) return;

        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        if(!returnUrl) return;

        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }
  onDestroy(){
    // this.authService.user$.
  }
}
