import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EtudiantComponent } from './etudiant/etudiant.component';
// import { ProfComponent } from './prof/prof.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCarComponent } from './edit-car/edit-car.component';
import { AngularMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    // EtudiantComponent,
    // ProfComponent,
    CalculatorComponent,
    CarComponent,
    CarsComponent,
    LoginComponent,
    NavbarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
