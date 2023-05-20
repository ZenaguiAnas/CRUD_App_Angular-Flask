import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup(): void {
    const userData = { email: this.email, password: this.password };
    this.http.post<any>('http://localhost:5000/signup', userData).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); 
      },
      (error) => {
        console.log('Error during signup:', error);
      }
    );
  }
}
