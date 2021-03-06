import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Flight} from "../../entities/flight";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {AbstractFlightService} from "./abstract-flight.service";

export const API_URL = 'http://www.angular.at/api/flight';

@Injectable()
export class FlightService implements AbstractFlightService {
  flights: Flight[] = [];

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .get<Flight[]>(API_URL, { params, headers })
      .pipe(
        // tap(flights => console.log('inside flightService', flights))
        tap(flights => this.flights = flights)
      );

    /*return of([
      {
        id: 999,
        from: 'Madrid',
        to: 'London',
        date: (new Date()).toISOString(),
        delayed: true
      }
    ])
      .pipe(
        tap(flights => this.flights = flights),
        retry(5),
        catchError(err => {
          console.error((err));
          return of([]);
        })
      );*/
  }
}
