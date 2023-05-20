import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Car } from '../car.model';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {
  car!: Car;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId !== null) {
      this.fetchCar(carId);
    }
  }

  fetchCar(carId: string) {
    this.http.get<Car>(`/api/cars/${carId}`).subscribe(
      (car: Car) => {
        this.car = car;
      },
      (error) => {
        console.log('Error fetching car:', error);
      }
    );
  }

  editCar() {
    this.router.navigate(['/edit-car', this.car.id_car]);
  }

  deleteCar() {
    this.router.navigate(['/delete-car', this.car.id_car]);
  }
}
