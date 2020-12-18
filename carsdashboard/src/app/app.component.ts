import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from "@angular/material/select";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedQuarter:string = 'full_year'
  quarterValues = {
      q1:[1,2,3],
      q2:[4,5,6],
      q3:[7,8,9],
      q4:[10,11,12]
  }
  selectedQuerterValues:any;
  filteredCars:any;
  selectedQuarterControl = new FormControl(this.selectedQuarter);
  title = 'cars-dashboard';
  cars:any;
  ngOnInit(){
    this.cars = [{
      _id: "1",
       make:"Mrecedes Benz",
      model:"AMG S550",
      date:"1-1-2020",
      vin:"WAUSH78E47A923500",
      price:"50000", 
      released:"Released",
      picture_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7NPAVwWpTQT-MnlfPEpi9fHhMOjEh02LdQ&usqp=CAU"
  },
  {
      _id: "2",
      make:"Volvo",
      model:"S90 Hybrid",
      date:"1-1-2020",
      vin:"WAUSH78E47A923500",
      price:"50000", 
      released:"Released",
      picture_url:"https://media.wired.com/photos/5da789a3a30cfa0008c53259/master/w_2560%2Cc_limit/Transpo_volvo_259187_Volvo_XC40_Recharge_P8_AWD_in_Sage_Green.png"
  },
  {
      _id: "3",
      make:"Tesla",
      model:"Model Y",
      date:"5-1-2020",
      vin:"WAUSH78E47A923500",
      price:"50000", 
      released:"No",
      picture_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLigDTlx67_DQCEyt9cxjatX3LEwG02R4NBA&usqp=CAU"
  },
  {
      _id: "4",
      make:"Tesla",
      model:"Model X",
      date:"5-1-2020",
      vin:"WAUSH78E47A923500",
      price:"100000", 
      released:"Relesed",
      picture_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvO4gEjmCmFPuOjmUHEo5aOfVQOA4IKot4w&usqp=CAU"
  },
  {
      _id: "5",
      make:"KIA",
      model:"Solano",
      date:"8-1-2020",
      vin:"WAUSH78E47A923500",
      price:"50000", 
      released:"Relesed",
      picture_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNWwiNVpj03b2WZSzSj7b79NFO4ckbfVdhA&usqp=CAU"
  },
  {
      _id: "6",
      make:"KIA",
      model:"Sonnet",
      date:"8-1-2020",
      vin:"WAUSH78E47A923500",
      price:"50000", 
      released:"No",
      picture_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNWwiNVpj03b2WZSzSj7b79NFO4ckbfVdhA&usqp=CAU"
  },
  {
      _id: "7",
      make:"Lexus",
      model:"GS",
      date:"12-1-2020",
      vin:"WAUSH78E47A923500",
      price:"50000", 
      released:"No",
      picture_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlkoW0kE5_xxTEd9oRVW_L7f8K5_ZVouiZw&usqp=CAU"
  },
  {
      _id: "8",
      make:"Cadillac",
      model:"CTS",
      date:"12-1-2020",
      vin:"WAUSH78E47A923500",
      price:"50000", 
      Released:"Released",
      picture_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7NPAVwWpTQT-MnlfPEpi9fHhMOjEh02LdQ&usqp=CAU"
  }]
  this.filteredCars = this.cars;
  }
  

  selectedValue(event: MatSelectChange) {
    console.log(event.value,'valla')
    this.filterCars(event.value);
  }
  filterCars(quarter:string){
      console.log(quarter,"quarter")
      switch(quarter){
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
  applyFilter(quarter){
    let filteredCars = this.cars.filter(car => 
        {
            return (this.quarterValues[quarter].includes(parseInt(car.date.slice(0,car.date.indexOf('-')))))
        });
        return  filteredCars;
  }
 
}