import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class AdminOrderDetailComponent implements OnInit {

  orders$;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService) { }

  ngOnInit() {
    let orderID = this.route.snapshot.paramMap.get('id');
    this.orders$ = this.orderService.getOrderByID(orderID);

  }

}
