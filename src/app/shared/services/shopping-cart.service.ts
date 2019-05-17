import { ShoppingCartItem } from 'shared/models/shopping-cart-items';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Product } from 'shared/models/product';
import { take, map } from 'rxjs/operators';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartID = await this.getOrCreateCartID();
    return this.db.object('/shopping-carts/' + cartID).valueChanges()
            .map((x: {items: { [productID: string]: ShoppingCartItem }}) => {
                if(!x) return new ShoppingCart();
                return new ShoppingCart(x.items);
            })
  }

  async addToCart(product: Product){
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product){
    this.updateItem(product, -1);
  }

  async clearCart(){
    let cartID = await this.getOrCreateCartID();
    this.db.object('/shopping-carts/' + cartID + '/items').remove();
  }

  private removeItem(cartID, productID){
    return this.db.object('/shopping-carts/' + cartID + '/items/'  + productID + '/').remove();
  }
  private getItem(cartID, productID){
    return this.db.object('/shopping-carts/' + cartID + '/items/'  + productID)
  }


  private async getOrCreateCartID(): Promise<string> {
    let cartID = localStorage.getItem('cartID');
    if(!cartID){
      let result = await this.create();
      localStorage.setItem('cartID', result.key);
      return result.key;
    }
    return cartID;
  }



  private async updateItem(product: Product, change: number){
    let cartID = await this.getOrCreateCartID();

    //Add product to DB
    let $item = this.getItem(cartID, product.key);
    $item.valueChanges().pipe(take(1)).subscribe( (item: ShoppingCartItem ) => {

      if( change === -1 && item.quantity === 1){
        this.removeItem(cartID, product.key);
        return;
      }

      $item.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity : ((item !== null) ? item.quantity : 0) + change})
      })
  }
}
