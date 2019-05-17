import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { positionElements } from '@ng-bootstrap/ng-bootstrap/util/positioning';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders;
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { }

  ngOnInit() {
      this.authService.user$
        .switchMap( user => {
          if(!user) return;

          return this.orderService.getOrdersByUser(user.uid)
        })
        .subscribe(orders => {
            this.orders = orders;
         });

  }
}
