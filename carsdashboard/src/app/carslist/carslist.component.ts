import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from "@angular/material/select";
import { CarsService } from '.././carservice/cars.service';
import { Car, Quarter } from '../types';

@Component({
    selector: 'app-carslist',
    templateUrl: './carslist.component.html',
    styleUrls: ['./carslist.component.css'],
    providers: [CarsService]
})
export class CarslistComponent implements OnInit {
    constructor(private _carsService: CarsService) { }
    selectedQuarter: string = 'full_year';
    noData: boolean = false;
    loading: boolean = false;
    selectedStat: string = 'None';
    filteredCars: Car[];
    selectedQuarterControl = new FormControl(this.selectedQuarter);
    cars: Car[];
    quarters: Quarter[] = [{ label: '2020 Full Year', value: 'full_year' }, { label: '2020 Q1', value: 'q1' }, { label: '2020 Q2', value: 'q2' }, { label: '2020 Q3', value: 'q3' }, { label: '2020 Q4', value: 'q4' }];
    status: string[] = ['None', 'Released', 'Upcoming'];

    ngOnInit() {
        this.loading = true;
        this._carsService.getCars().subscribe((cars: Car[]) => {
            this.loading = false;
            this.cars = cars;
            this.filteredCars = this.cars;
        })
    }

    selectedValue(event: MatSelectChange) {
        this.noData = false;
        if (this.selectedStat === 'None') {
            this.filteredCars = this._carsService.filterCars(this.cars, event.value);
        } else {
            this.filteredCars = this._carsService.filterCars(this.cars, this.selectedQuarter).filter(car => {
                return car.released === this.selectedStat;
            })
        }
        if (this.filteredCars.length === 0) {
            this.noData = true;
        }
    }

    selectedStatus(event: MatSelectChange) {
        this.noData = false;
        if (event.value == "None") {
            this.filteredCars = this._carsService.filterCars(this.cars, this.selectedQuarter);
        } else {
            this.filteredCars = this._carsService.filterCars(this.cars, this.selectedQuarter).filter(car => {
                return car.released === event.value;
            })
        }
        if (this.filteredCars.length === 0) {
            this.noData = true;
        }
    }

    reset() {
        this.noData = false;
        this.selectedStat = "None";
        this.selectedQuarter = "full_year";
        this.filteredCars = this.cars;
    }

}

