import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Car } from '../car.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  addCarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.addCarForm = this.formBuilder.group({
      id_car: ['', Validators.required],
      model: ['', Validators.required],
      hp: ['', Validators.required],
      marque: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addCarForm.invalid) {
      return;
    }

    const car: Car = {
      id_car: this.addCarForm.value.id_car,
      model: this.addCarForm.value.model,
      hp: this.addCarForm.value.hp,
      marque: this.addCarForm.value.marque
    };

    // Save the car data (e.g., send it to a service or API)

    this.router.navigate(['/list-cars']);
  }
}

