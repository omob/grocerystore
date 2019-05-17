import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/product';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  categories$;
  product: Product;
  subscription: Subscription;
  id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catService: CategoryService, 
    private productService: ProductService) { 
      this.product = { title : "", category: "", price: null, imageUrl:"" }

      this.categories$ = this.catService.getCategories();

      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id) {
        this.subscription = this.productService.getProduct(this.id).subscribe( p => this.product = p);
      }
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if(!this.subscription) return;
    this.subscription.unsubscribe();
  }

  save(){
    if(this.id) this.productService.updateProduct(this.id, this.product);
    else this.productService.create(this.product);

    this.router.navigateByUrl('/admin/products');
  }

  delete(){
    this.productService.deleteProduct(this.id);
    this.router.navigateByUrl('/admin/products');
  }
}
