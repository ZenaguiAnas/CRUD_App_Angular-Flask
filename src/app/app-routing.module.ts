import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  // url avec la componenent
  { path: 'addcar', component: CarComponent },
  { path: 'editcar/:id', component: EditCarComponent },
  { path: 'lisofcars', component: CarsComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
