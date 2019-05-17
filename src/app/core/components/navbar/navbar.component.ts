import { Router } from '@angular/router';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Subscribable, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'top-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarCollapsed=true;
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private router: Router,
    private authService: AuthService, 
    private cartService: ShoppingCartService){
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
  
  async ngOnInit(){
    this.authService.appUser$().subscribe( appUser => this.appUser = appUser);
    this.cart$ =  (await this.cartService.getCart());
  }

}