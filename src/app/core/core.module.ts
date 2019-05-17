import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
