import { Component } from '@angular/core';
import Book from 'src/app/interface/Book';
import { ApiService } from 'src/app/service/api.service';

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
  public handleClick(): void {
    const url = 'http://localhost:8080/book/getAllBooks';
    this.apiService.get(url).subscribe({
      next: (response: Book[]) => (this.results = response),
      error: (error: any) => console.error(error),
    });
  }
}
