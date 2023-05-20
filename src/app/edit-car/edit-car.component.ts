import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Car } from '../car.model';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  editCarForm: FormGroup;
  car!: Car;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.editCarForm = this.formBuilder.group({
      id_car: ['', Validators.required],
      model: ['', Validators.required],
      hp: ['', Validators.required],
      marque: ['', Validators.required]
    });
  }

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
        this.editCarForm.patchValue({
          id_car: this.car.id_car,
          model: this.car.model,
          hp: this.car.hp,
          marque: this.car.marque
        });
      },
      (error) => {
        console.log('Error fetching car:', error);
      }
    );
  }

  onSubmit() {
    if (this.editCarForm.invalid) {
      return;
    }

    const updatedCar: Car = {
      id_car: this.car.id_car,
      model: this.editCarForm.value.model,
      hp: this.editCarForm.value.hp,
      marque: this.editCarForm.value.marque
    };

    this.http.put(`/api/cars/${this.car.id_car}`, updatedCar).subscribe(
      () => {
        this.router.navigate(['/list-cars']);
      },
      (error) => {
        console.log('Error updating car:', error);
      }
    );
  }
}
