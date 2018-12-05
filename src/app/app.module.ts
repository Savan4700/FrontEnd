import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; //npm install --save @ng-bootstrap/ng-bootstrap
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HashLocationStrategy,
  LocationStrategy,
  CommonModule
} from '@angular/common';
// import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
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
