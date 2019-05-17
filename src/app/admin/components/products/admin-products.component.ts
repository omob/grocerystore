import { Product } from 'shared/models/product';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnInit, OnDestroy {

  products: any[];
  subscription: Subscription;
  tableResource: DataTableResource<any>;
  items: Product[] = [];
  itemCount ;

  constructor(productsService: ProductService) { 
    this.subscription = productsService.getAll()
      .subscribe( products => {
        this.products = products;
        this.initializeTable(products);
      });
  }

  private initializeTable(products: any[]){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items );
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  reloadItems(params){
    if (!this.tableResource ) return;

    this.tableResource.query(params)
      .then(items => this.items = items );
  }

  filter(query: string){
    let filteredProducts = (query) ? 
      this.products.filter( product  => product.title.toLowerCase().includes(query.toLowerCase())) : this.products;
    
    this.initializeTable(filteredProducts);
  }
}