import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>(m.AdminModule))
  },
  { path:'**', component: PagenotfoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
