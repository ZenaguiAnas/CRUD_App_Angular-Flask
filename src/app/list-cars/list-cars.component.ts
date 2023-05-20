import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Car } from '../car.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars() {
    this.http.get<Car[]>('http://localhost:5000/cars').subscribe(
      (cars: Car[]) => {
        this.cars = cars;
      },
      (error) => {
        console.log('Error fetching cars:', error);
      }
    );
  }

  editCar(id: number) {
    this.router.navigate(['/edit-car', id]);
  }

  deleteCar(id: number) {
    this.router.navigate(['/delete-car', id]);
  }

  showCar(id: number) {
    this.router.navigate(['/show-car', id]);
  }
}
