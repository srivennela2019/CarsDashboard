import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {CarComponent} from './car/car.component';
import { CarslistComponent } from './carslist/carslist.component';
const routes: Routes = [
    { path: 'car/:id', component: CarComponent },
    { path: '', component: CarslistComponent },
  ]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }