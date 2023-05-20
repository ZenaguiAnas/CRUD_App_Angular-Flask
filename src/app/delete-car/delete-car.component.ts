import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Car } from '../car.model';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  carId: number | null | undefined;;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get('id');
    this.carId = carId ? +carId : null;

    if (this.carId === null) {
      // Handle the case when the carId is null, e.g., display an error message or navigate to an error page
    } else {
      this.fetchCar(this.carId);
    }
  }

  fetchCar(carId: number) {
    this.http.get(`/api/cars/${carId}`).subscribe(
      () => {
        // Display the car data in the template for confirmation
      },
      (error) => {
        console.log('Error fetching car:', error);
      }
    );
  }

  deleteCar() {
    if (this.carId !== null) {
      this.http.delete(`/api/cars/${this.carId}`).subscribe(
        () => {
          this.router.navigate(['/list-cars']);
        },
        (error) => {
          console.log('Error deleting car:', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/list-cars']);
  }
}

