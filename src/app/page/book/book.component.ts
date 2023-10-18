import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import Book from 'src/app/interface/Book';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { BookService } from 'src/app/service/book.service';
import { BorrowedBookService } from 'src/app/service/borrowedbook.service';
import User from 'src/app/interface/User';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  //properties
  private dataServiceSubscription: Subscription = new Subscription();
  public book: Book = {} as Book;
  public currentUser: User = {} as User;

  //constructor
  constructor(
    private bookService: BookService,
    private borrowedBookService: BorrowedBookService,
    private dataService: DataService,
    private router: Router
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    //subscribing to dataService
    this.dataServiceSubscription = this.dataService
      .getClickedBook()
      .subscribe((book: Book) => {
        this.book = book;
      });

    this.dataServiceSubscription = this.dataService
      .getCurrentUser()
      .subscribe((currentUser: User) => {
        this.currentUser = currentUser;
      });
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe();
  }

  public handleGenreClick(): void {
    this.bookService.getBooksByGenre(this.book.genre);
    this.router.navigate(['/all-books']);
  }

  public handleBorrowBook(): void {
    this.borrowedBookService.borrowBook(this.book);
  }
}
