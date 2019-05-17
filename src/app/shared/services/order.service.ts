import { map } from 'rxjs/operators';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private db: AngularFireDatabase) { }

  async placeOrder(order){
    let result = await this.db.list('/orders').push(order);
    this.cartService.clearCart();

    return result;
  }

   getOrders(){
    return this.db.list('/orders')
        .snapshotChanges()
                      .pipe(
                        map(changes => {
                            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                          })
                      );
  }

  getOrderByID(orderID){
    return this.db.object('/orders/' + orderID).valueChanges();
  }

  getOrdersByUser(userID: string){
   return  this.db.list('/orders', ref => {
      ref.orderByChild('userID');
      ref.equalTo(userID);
      return ref;
    })
    .snapshotChanges()
    .pipe(
      map(changes => {
          return changes.map(c => {
            return { key: c.payload.key, ...c.payload.val() }
          });
        })
    );
  }
}
