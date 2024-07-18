import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';

import { HomeComponent } from './home/home.component';
import { DairyComponent } from './dairy/dairy.component';
import { GroceryComponent } from './grocery/grocery.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyOrderComponent } from './my-order/my-order.component';
const routes: Routes = [
  {
    path:'', component:CustomerHeaderComponent,
    children:[
      { path:'', component: HomeComponent },
      {path: 'home', component: HomeComponent},
      {path: 'dairy', component: DairyComponent},
      {path: 'grocery', component: GroceryComponent},
      {path: 'account', component: MyAccountComponent},
      {path: 'order', component: MyOrderComponent}
      
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
