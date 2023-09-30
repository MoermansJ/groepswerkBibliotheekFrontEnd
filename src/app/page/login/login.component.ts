import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import User from '../../interface/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //properties
  public inputEmail: string = '';
  public inputPassword: string = '';

  //constructor
  constructor(private apiService: ApiService) {}

  //getters & setters

  //custom methods
  public registerUser(): void {
    const url = 'http://localhost:8080/user/registerUser';
    const body: User = {
      id: 0,
      email: 'email',
      password: 'password',
      isAdmin: false,
      borrowedBookList: [],
    };

    this.apiService.post(url, body).subscribe();
  }
}
