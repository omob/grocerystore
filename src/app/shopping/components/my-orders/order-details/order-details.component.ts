import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orders$;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    let orderID = this.route.snapshot.paramMap.get('id');
    this.orders$ = this.orderService.getOrderByID(orderID);
  }

}
