import { ApiService } from '../../service/api.service';
import User from '../../interface/User';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // properties
  public inputEmail: string = '';
  public inputPassword: string = '';
  public successfullAttempt: boolean = false;

  //constructor
  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  //custom methods
  public login(): void {
    const url = 'http://localhost:8080/user/loginUser';
    this.apiService
      .post(url, { email: this.inputEmail, password: this.inputPassword })
      .subscribe({
        next: (response: User) => {
          this.successfullAttempt = true;
          this.dataService.setCurrentUser(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.admin ? 'admin' : 'user');
          localStorage.setItem('email', response.email);
          console.log(response);
        },
        error: (error: any) => {
          console.error('Login failed', error);
        },
      });
  }
}
