import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../types';

@Component({
  selector: 'app-smallcar',
  templateUrl: './smallcar.component.html',
  styleUrls: ['./smallcar.component.css']
})
export class SmallcarComponent implements OnInit {
  @Input() car: Car;
  constructor() { }

  ngOnInit(): void {
  }

}
