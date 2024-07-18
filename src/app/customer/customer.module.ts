import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';
import { HomeComponent } from './home/home.component';
import { DairyComponent } from './dairy/dairy.component';
import { GroceryComponent } from './grocery/grocery.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyOrderComponent } from './my-order/my-order.component';


@NgModule({
  declarations: [
    CustomerHeaderComponent,
    CustomerFooterComponent,
    HomeComponent,
    DairyComponent,
    GroceryComponent,
    MyAccountComponent,
    MyOrderComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
