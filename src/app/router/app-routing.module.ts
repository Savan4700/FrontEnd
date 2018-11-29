import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupSigninModule } from '../signup-signin/signup-signin.module';
import { MyNavModule } from '../my-nav/my-nav.module';
export function loadSignUpModule() {
  return SignupSigninModule;
}

export function loadHomeModule() {
  return MyNavModule;
}

const routes: Routes = [
  { path: '', redirectTo: 'signup-login', pathMatch: 'full' },
  { path: 'signup-login', loadChildren: loadSignUpModule },
  { path: 'home', loadChildren: loadHomeModule },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    })
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: []
})
export class AppRoutingModule { }
