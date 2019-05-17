import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { NotFoundComponent } from 'shared/not-found/not-found.component';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

//import * from 'angular-4-data-table';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContactComponent,
   ],
  imports: [
    SharedModule,
    CoreModule,
    AdminModule,
    ShoppingModule,
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'contact', component:  ContactComponent},    
      { path: '**', component:  NotFoundComponent}
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
