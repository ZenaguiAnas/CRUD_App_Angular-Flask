import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  carId: number | null | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const carIdParam = this.route.snapshot.paramMap.get('id');
    this.carId = carIdParam ? +carIdParam : null;

    if (this.carId === null) {
      // Handle the case when the carId is null, e.g., display an error message or navigate to an error page
    } else {
      // Fetch the car data using the carId (e.g., from a service or API)
      // Display the car data in the template for confirmation
    }
  }

  deleteCar() {
    if (this.carId !== null) {
      // Perform the delete operation for the car with the carId
      // (e.g., using a service or API)
      // After successful deletion, navigate back to the list of cars
      this.router.navigate(['/list-cars']);
    }
  }

  cancel() {
    // Navigate back to the list of cars without deleting the car
    this.router.navigate(['/list-cars']);
  }
}
