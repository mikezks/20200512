import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/container/flight-search/flight-search.component';
import { CityPipe } from './shared/pipes/city.pipe';
import {CoreModule} from "./core/core.module";
import {FlightBookingModule} from "./flight-booking/flight-booking.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FlightBookingModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
