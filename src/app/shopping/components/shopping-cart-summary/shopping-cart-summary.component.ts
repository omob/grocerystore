import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent  {

  @Input('shopping-cart') cart;
  
  constructor(private cartService: ShoppingCartService) {
  }


}
