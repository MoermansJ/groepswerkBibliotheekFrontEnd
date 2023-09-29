import { Component } from '@angular/core';
import Book from 'src/app/interface/Book';
import { ApiService } from 'src/app/service/api.service';
import User from 'src/app/interface/User';

@Component({
  selector: 'app-testbutton',
  templateUrl: './testbutton.component.html',
  styleUrls: ['./testbutton.component.css'],
})
export class TestbuttonComponent {
  //properties
  public results: Book[] = [];

  //constructor
  constructor(private apiService: ApiService) {}

  //getters & setters

  //custom methods
  public getAllBooks(): void {
    const url = 'http://localhost:8080/book/getAllBooks';
    this.apiService.get(url).subscribe({
      next: (response: Book[]) => (this.results = response),
      error: (error: any) => console.error(error),
    });
  }

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
