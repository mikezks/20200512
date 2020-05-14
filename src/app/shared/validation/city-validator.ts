import {AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateCity(control: AbstractControl): ValidationErrors | null {
  const validCities = [
    'Graz',
    'Hamburg',
    'Berlin',
    'Paris'
  ];

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

export function validateCityWithParams(validCities: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control?.value && validCities.indexOf(control.value) === -1) {
      return {
        city: {
          validCities,
          actualCity: control.value
        }
      };
    }

    return null;
  };
}
