import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataTableModule } from 'angular5-data-table';
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    CustomFormsModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    NgbModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    CustomFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
