import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions:boolean = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  defaultImageUrl: string;
  
  constructor(private cartService: ShoppingCartService) { 
    this.defaultImageUrl = "https://i0.wp.com/hifadhiafrica.org/wp-content/uploads/2017/01/default-placeholder.png";
  }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

}
