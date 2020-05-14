import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightSearchComponent} from "./container/flight-search/flight-search.component";
import {FlightEditComponent} from "./container/flight-edit/flight-edit.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit',
        redirectTo: 'flight-edit/0'
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
