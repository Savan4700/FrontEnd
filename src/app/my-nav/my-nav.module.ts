import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { MyNavComponent } from './my-nav.component';
import { AuthGuard } from '../Auth/Auth-guard.service';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { CustomerModule } from './Customer/customer.module';

export function loadCustomerModule() {
  return CustomerModule;
}

const routes: Routes = [
  { path: '', redirectTo: 'work_area', pathMatch: 'full' },
  {
    path: 'work_area', component: MyNavComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashbaordComponent },
      { path: 'customer', loadChildren: loadCustomerModule }
]
}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
      MyNavComponent,
      DashbaordComponent,
    ]
})
export class MyNavModule {
  constructor() {
  }
}
