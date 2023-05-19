import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../car.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  cars!: Car[]; // Array to store the list of cars

  constructor(private router: Router) { }

  ngOnInit() {
    // Fetch the list of cars (e.g., from a service or API)
    // Assign the fetched list of cars to the "cars" property
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
