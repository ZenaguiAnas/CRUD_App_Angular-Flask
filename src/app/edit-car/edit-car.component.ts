import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private route: ActivatedRoute
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
    // Fetch the car data using the carId (e.g., from a service or API)
    // Assign the fetched car data to the "car" property
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

    // Update the car data with the updatedCar (e.g., using a service or API)

    this.router.navigate(['/list-cars']);
  }
}
