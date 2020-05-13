import { Pipe, PipeTransform } from '@angular/core';
import {merge, Observable, of} from "rxjs";
import {delay, startWith} from "rxjs/operators";

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string | number, fmt?: string): Observable<string | number> {
    let short, long;

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      default:
        short = long = value;
    }

    if (fmt === 'short') {
      return merge(
        of('please wait'),
        of(short)
          .pipe(
            delay(3000)
          )
      );
    }

    return of(long);
  }
}
