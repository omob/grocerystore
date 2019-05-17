import { ProductService } from 'shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products$;

  constructor(private productService: ProductService) { 
    this.products$ = productService.getAll();

  }

  ngOnInit() {
  }

}
