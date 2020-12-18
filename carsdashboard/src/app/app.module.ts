import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material-module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarComponent } from './car/car.component';
import { AppRoutingModule } from './app-routing-module';
import { CarslistComponent } from './carslist/carslist.component';
import { HttpClientModule } from '@angular/common/http';
import { SmallcarComponent } from './smallcar/smallcar.component';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarslistComponent,
    SmallcarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
