import {Component, Input, OnInit} from '@angular/core';
import {Flight} from "../../../entities/flight";

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() item: Flight;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selected = !this.selected;
  }

}
