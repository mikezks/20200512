import {Component, OnDestroy, OnInit, Optional} from '@angular/core';
import {Flight} from "../entities/flight";
import {FlightService} from "./flight.service";
import {Subscription, timer} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  from = 'Hamburg';
  to = 'Graz';
  //flights: Flight[] = [];
  selectedFlight: Flight;
  //subscriptions: Subscription;

  get flights(): Flight[] {
    return this.flightService.flights;
  }

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    /*this.subscriptions = timer(0, 1000)
      .pipe(
        take(5)
      )
      .subscribe(console.log);*/
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        //flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  ngOnDestroy(): void {
    //this.subscriptions.unsubscribe();
  }
}
