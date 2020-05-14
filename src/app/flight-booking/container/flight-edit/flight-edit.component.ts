import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {validateCity, validateCityWithParams} from "../../../shared/validation/city-validator";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [0],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          validateCityWithParams([
            'Graz',
            'Hamburg',
            'Budapest',
            'Rom'
          ])
        ]
      ],
      to: [
        'Hamburg',
        [
          Validators.required,
          Validators.minLength(3),
          validateCity
        ]
      ],
      date: [ (new Date()).toISOString() ]
    });

    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get('id');
        this.editForm.controls.id.setValue(this.id);
      });

    this.editForm.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(
        flight => console.log('flight changed', flight)
      );
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
