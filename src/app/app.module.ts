import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; //npm install --save @ng-bootstrap/ng-bootstrap
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpClientModule } from '@angular/common/http';
import {
  HashLocationStrategy,
  LocationStrategy,
  CommonModule
} from '@angular/common';
// import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerListService } from './my-nav/customer-list/customer-list.service';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // SocialLoginModule,
    BrowserModule, // platformBrowserDynamic is a function used to bootstrap an Angular application.
    AppRoutingModule,
    CommonModule,
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    // LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClient,
    HttpModule,
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
    // HttpModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
