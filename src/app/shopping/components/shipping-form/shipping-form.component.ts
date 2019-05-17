import { Shipping } from './../../model/shipping';
import { ShoppingCart } from 'shared/models/shopping-cart.ts';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription, empty } from 'rxjs';
import { Order } from 'shared/models/order';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {

  shipping: Shipping;
  userID: string;
  userSubscription: Subscription;
  @Input('shopping-cart') cart: ShoppingCart;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) { 
      this.shipping = {
        name: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city : ""
      }
    }

  async ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userID = user.uid);
  }


  async placeOrder(){
    let order = new Order(this.userID, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
   this.router.navigate(['/order-success/', result.key]);
  }


  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
