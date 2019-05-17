import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../shared/services/auth-guard.service';
import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BannerComponent } from './components/banner/banner.component';
import { OrderDetailsComponent } from './components/my-orders/order-details/order-details.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: 'my/orders/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },

    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    BannerComponent,
    OrderDetailsComponent,
  ],
  exports: [BannerComponent]
})
export class ShoppingModule { }
