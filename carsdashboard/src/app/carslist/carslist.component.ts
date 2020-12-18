import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from "@angular/material/select";
import { CarsService } from '.././carservice/cars.service';
import { Car } from '../types';
@Component({
    selector: 'app-carslist',
    templateUrl: './carslist.component.html',
    styleUrls: ['./carslist.component.css'],
    providers: [CarsService]
})
export class CarslistComponent implements OnInit {
    constructor(private _carsService: CarsService) { }
    quarterValues = {
        q1: [1, 2, 3],
        q2: [4, 5, 6],
        q3: [7, 8, 9],
        q4: [10, 11, 12]
    }
    selectedQuarter: string = 'full_year';
    selectedStat:string;
    filteredCars: Car[];
    selectedQuarterControl = new FormControl(this.selectedQuarter);
    cars: Car[];

    ngOnInit() {
        this._carsService.getCars().subscribe((cars:Car[]) => {
            this.cars = cars;
            this.filteredCars = this.cars;
        })
    }

    selectedValue(event: MatSelectChange) {
        this.filterCars(event.value);
    }

    selectedStatus(event: MatSelectChange){
        console.log(event.value);
        this.filteredCars = this.cars.filter(car=>{
            return car.released === event.value;
        })
    }
     
    reset(){
        this.selectedStat = "";
        this.selectedQuarter = "full_year";
        this.filteredCars = this.cars;
    }

    filterCars(quarter: string) {
        this.selectedStat = ""
        console.log(quarter, "quarter")
        switch (quarter) {
            case 'full_year':
                this.filteredCars = this.cars;
                break;
            case 'q1':
                this.filteredCars = this.applyFilter('q1');
                break;
            case 'q2':
                this.filteredCars = this.applyFilter('q2');
                break;
            case 'q3':
                this.filteredCars = this.applyFilter('q3');
                break;
            case 'q4':
                this.filteredCars = this.applyFilter('q4');
                break;
        }

    }
    applyFilter(quarter) {
        let filteredCars = this.cars.filter(car => {
            return (this.quarterValues[quarter].includes(parseInt(car['date'].slice(0, car['date'].indexOf('-')))))
        });
        return filteredCars;
    }

}

