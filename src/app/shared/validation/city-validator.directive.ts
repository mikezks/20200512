import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {
  @Input() city: string[];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const validCities = this.city;

    if (control?.value && validCities.indexOf(control.value) === -1) {
      return {
        city: {
          validCities,
          actualCity: control.value
        }
      };
    }

    return null;
  }
}
