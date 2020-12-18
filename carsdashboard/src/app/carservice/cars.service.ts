import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../types';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  quarterValues = {
    q1: [1, 2, 3],
    q2: [4, 5, 6],
    q3: [7, 8, 9],
    q4: [10, 11, 12]
}
  constructor(private _http:HttpClient) { }
  getCars(){
    return this._http.get('http://localhost:3000/api/dashboard/cars');
  }

  getCar(id:string){
    return this._http.get(`http://localhost:3000/api/dashboard/car/${id}`);
  }
  filterCars(cars:Car[],quarter: string) {
    let toBeFilteredCars = cars.slice();
    switch (quarter) {
        case 'full_year':
            return toBeFilteredCars;
            break;
        case 'q1':
             return this.applyFilter(toBeFilteredCars,'q1');
        case 'q2':
             return this.applyFilter(toBeFilteredCars,'q2');
        case 'q3':
             return this.applyFilter(toBeFilteredCars,'q3');
        case 'q4':
             return this.applyFilter(toBeFilteredCars,'q4');
    }

}
applyFilter(cars:Car[] ,quarter:string) {
    let filteredCars = cars.filter(car => {
        return (this.quarterValues[quarter].includes(parseInt(car['date'].slice(0, car['date'].indexOf('-')))))
    });
    return filteredCars;
}
}
