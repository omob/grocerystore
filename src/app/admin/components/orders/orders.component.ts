import { UserService } from 'shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: any[];
  constructor(
    private userService: UserService,
    private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe( orders => {
      this.orders = orders;
    })
  }

}
