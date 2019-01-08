import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { VidhanSabhaCreateComponent } from './vidhan-sabha-create/vidhan-sabha-create.component';
import { VidhanSabhaViewComponent } from './vidhan-sabha-view/vidhan-sabha-view.component';
const routesForItem: Route[] = [
  { path: '', redirectTo: 'view-vidhansabha', pathMatch: 'full' },
  {
    path: 'view-vidhansabha', component: VidhanSabhaViewComponent
  },
  {
    path: 'vidhan-sabha/:operation', component: VidhanSabhaCreateComponent
  },
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routesForItem)
  ],
  providers: [],
  declarations: [VidhanSabhaCreateComponent, VidhanSabhaViewComponent]
})
export class VidhanSabhaModule { }
