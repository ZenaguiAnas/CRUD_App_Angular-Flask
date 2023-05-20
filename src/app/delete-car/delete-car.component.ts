import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  carId: number | null = null;
  carData: any;

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
    this.http.get<any>(`http://localhost:5000/cars/${carId}`).subscribe(
      (car: any) => {
        this.carData = car;
      },
      (error) => {
        console.log('Error fetching car:', error);
      }
    );
  }

  deleteCar() {
    if (this.carId !== null) {
      this.http.delete<any>(`http://localhost:5000/cars/${this.carId}`).subscribe(
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
