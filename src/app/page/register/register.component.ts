import { Component, Optional } from '@angular/core';
import User from 'src/app/interface/User';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  //properties
  public email: string = '';
  public password: string = '';
  public result: string = '';

  //constructor
  constructor(private apiService: ApiService) {}

  //getters & setters

  //custom methods
  public handleRegister(): void {
    //email + pw form validation
    if (!this.email.trim() || !this.password.trim()) {
      this.result = 'Credentials invalid';
      return;
    }
    const url = `http://localhost:8080/user/registerUser`;

    this.apiService
      .post(url, { email: this.email, password: this.password })
      .subscribe({
        next: (response: any) => (this.result = 'Registration OK'),
        error: (error: any) => (this.result = 'Registration FAILED'),
      });
  }
}
