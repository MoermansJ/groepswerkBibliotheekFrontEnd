import { Component, OnInit } from '@angular/core';
import Book from 'src/app/interface/Book';
import { ApiService } from 'src/app/service/api.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-new-books-carousel',
  templateUrl: './new-books-carousel.component.html',
  styleUrls: ['./new-books-carousel.component.css'],
})
export class NewBooksCarouselComponent implements OnInit {
  //properties
  public newestBooks: Book[] = [];

  //constructor
  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    const url = 'http://localhost:8080/book/getNewestBooks';
    this.apiService.get(url).subscribe({
      next: (response: Book[]) => (this.newestBooks = response),
      error: (error: any) => console.log(error),
    });
  }

  public handleCardClick(book: Book): void {
    //waiting for routerLink to load book-page first, so it can listen to clickedBook change
    setTimeout(() => {
      this.dataService.setClickedBook(book);
    }, 1);
  }
}
