import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular5-data-table';
import { SharedModule } from 'shared/shared.module';

import { AuthGuard } from './../shared/services/auth-guard.service';
import { AdminOrderDetailComponent } from './components/order-detail/order-detail.component';
import { AdminOrdersComponent } from './components/orders/orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminProductsComponent } from './components/products/admin-products.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    DataTableModule,
    RouterModule.forChild([
      { 
        path: 'admin/orders/:id', 
        component: AdminOrderDetailComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      }      
    ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminOrderDetailComponent
  ],
  providers: [
    AdminAuthGuard
  ]

})
export class AdminModule { }
