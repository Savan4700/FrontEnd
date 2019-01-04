import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LokSabhaViewComponent } from './lok-sabha-view/lok-sabha-view.component';
import { LokSabhaCreateComponent } from './lok-sabha-create/lok-sabha-create.component';
const routesForItem: Route[] = [
  { path: '', redirectTo: 'view-loksabha', pathMatch: 'full' },
  {
    path: 'view-loksabha', component: LokSabhaViewComponent
  },
  {
    path: 'lok-sabha/:operation', component: LokSabhaCreateComponent
  },
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routesForItem)
  ],
  providers: [],
  declarations: [LokSabhaViewComponent,LokSabhaCreateComponent]
})
export class LokSabhaModule { }