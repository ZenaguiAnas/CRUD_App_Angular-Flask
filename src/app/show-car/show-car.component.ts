import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Car } from '../car.model';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {
  car!: Car;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get('id');
    // Fetch the car data using the carId (e.g., from a service or API)
    // Assign the fetched car data to the "car" property
  }

  editCar() {
    this.router.navigate(['/edit-car', this.car.id_car]);
  }

  deleteCar() {
    this.router.navigate(['/delete-car', this.car.id_car]);
  }
}
