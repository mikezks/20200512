import { Injectable } from '@angular/core';
import {FlightService} from "./flight.service";
import {Observable} from "rxjs";
import {Flight} from "../../entities/flight";

@Injectable({
  providedIn: 'root',
  useClass: FlightService
})
export abstract class AbstractFlightService {
  flights: Flight[];

  abstract find(from: string, to: string): Observable<Flight[]>;
}
