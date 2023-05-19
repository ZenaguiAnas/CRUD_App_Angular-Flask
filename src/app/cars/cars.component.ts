import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CarModule } from '../car/car.module';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  cars!: CarModule[];

  constructor(private myservice: CarServiceService) {
    this.myservice.getAllcars().subscribe((data) => {
      this.cars = data;
    });
  }
}
