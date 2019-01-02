import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignupSigninComponent } from './signup-signin.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
// import { SignupAuthguardService } from '../Auth/signup-authguard.service';
import { AuthGuard } from '../Auth/Auth-guard.service';

const routesForSingUp: Route[] = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupSigninComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'form', component: FormSubmitComponent },
  ]}
];

@NgModule({
  imports: [
      SharedModule,
       RouterModule.forChild(routesForSingUp)],
  declarations: [
    LoginComponent,
    SignupSigninComponent,
    FormSubmitComponent
  ],
  providers: []
})
export class SignupSigninModule { }
