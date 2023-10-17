import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Book from 'src/app/interface/Book';
import User from 'src/app/interface/User';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['./all-books-page.component.css'],
})
export class AllBooksPageComponent implements OnInit, OnDestroy {
  //properties
  public currentUser: User = {} as User;
  public allBooks: Book[] = [];
  public filteredBooks: Book[] = [];
  public queryDescription: string = '';
  private showOnlyAvailableBooks: boolean = false;
  private dataServiceSubscription: Subscription = new Subscription();

  //constructor
  constructor(
    private dataService: DataService,
    private bookService: BookService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    //subscribing to dataService
    this.dataServiceSubscription = this.dataService
      .getCurrentUser()
      .subscribe((currentUser: User) => {
        this.currentUser = currentUser;
      });

    this.dataServiceSubscription = this.dataService
      .getSearchResults()
      .subscribe((allBooks) => {
        this.allBooks = allBooks;
        this.filteredBooks = allBooks;
      });

    this.dataServiceSubscription = this.dataService
      .getQueryDescription()
      .subscribe((queryDescription) => {
        this.queryDescription = queryDescription;
      });
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public handleCardClick(book: Book): void {
    this.dataService.setClickedBook(book);
  }

  public handleToggleShowOnlyAvailableBooks(): void {
    this.showOnlyAvailableBooks = !this.showOnlyAvailableBooks;

    if (this.showOnlyAvailableBooks) {
      this.filteredBooks = this.allBooks.filter((book) => book.available);
    } else {
      this.filteredBooks = this.allBooks;
    }
  }
}
