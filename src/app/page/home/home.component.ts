import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Book from 'src/app/interface/Book';
import { ApiService } from 'src/app/service/api.service';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  //properties
  public allBooks: Book[] = [];
  public queryDescription: string = '';
  private dataServiceSubscription: Subscription = new Subscription();

  //constructor
  constructor(
    private dataService: DataService,
    private bookService: BookService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    this.bookService.getAllBooks();

    //subscribing to dataService
    this.dataServiceSubscription = this.dataService
      .getSearchResults()
      .subscribe((value) => {
        this.allBooks = value;
      });

    this.dataServiceSubscription = this.dataService
      .getQueryDescription()
      .subscribe((value) => {
        this.queryDescription = value;
      });
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public handleCardClick(book: Book): void {
    //waiting for routerLink to load book-page first, so it can listen to clickedBook change
    setTimeout(() => {
      this.dataService.setClickedBook(book);
    }, 1);
  }
}
