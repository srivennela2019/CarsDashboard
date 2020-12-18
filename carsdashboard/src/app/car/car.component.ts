import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '.././carservice/cars.service';
import { Car } from '../types';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
   car : Car[];
  constructor(private route: ActivatedRoute,private _carsService: CarsService) { }
  
  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id');
    this._carsService.getCar(id).subscribe((car) => {
      this.car = car[0];
   })
  }

}
