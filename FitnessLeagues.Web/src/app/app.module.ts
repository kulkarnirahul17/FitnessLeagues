import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardHomeComponent } from "./Dashboard/dashboard.home";
import {FitbitLoginComponent} from "./Login/fitbit.login"
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, DashboardHomeComponent, FitbitLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
