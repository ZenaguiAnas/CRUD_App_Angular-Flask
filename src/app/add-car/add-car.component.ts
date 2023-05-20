import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  addCarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
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

    const car = {
      id: this.addCarForm.value.id_car,
      model: this.addCarForm.value.model,
      hp: this.addCarForm.value.hp,
      marque: this.addCarForm.value.marque
    };

    this.http.post<any>('http://localhost:5000/savecar', car)
      .subscribe(
        response => {
          console.log('Car added successfully!');
          this.router.navigate(['/list-cars']);
        },
        error => {
          console.error('Error adding car:', error);
        }
      );
  }
}


