import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routesForItem: Route[] = [
  { path: '', redirectTo: 'view-customer', pathMatch: 'full' },
  {
    path: 'view-customer', component: CustomerListComponent
  },
  {
    path: 'customer/:operation', component: CreateCustomerComponent
  },
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routesForItem)
  ],
  providers: [],
  declarations: [CreateCustomerComponent,CustomerListComponent]
})
export class CustomerModule { }