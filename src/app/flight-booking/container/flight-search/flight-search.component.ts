import {Component, OnDestroy, OnInit, Optional} from '@angular/core';
import {Flight} from "../../../entities/flight";
import {AbstractFlightService} from "../../services/abstract-flight.service";

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
  //timer$: Observable<number>;
  basket: object = {
    '3': true,
    '5': true
  };
  validCities = [
    'Graz',
    'Hamburg',
    'Mallorca',
    'Amsterdam'
  ];

  get flights(): Flight[] {
    return this.flightService.flights;
  }

  constructor(private flightService: AbstractFlightService) { }

  ngOnInit(): void {
    /*
     this.timer$ = timer(0, 1000)
      .pipe(
        take(5)
      )

     this.subscriptions =
      this.timer$
        .subscribe(console.log);*/
  }

  search(): void {
    if (!this.from || !this.to) {
      return;
    }

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
