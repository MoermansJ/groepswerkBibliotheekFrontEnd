import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';
import User from '../interface/User';
import BorrowedBook from '../interface/BorrowedBook';
import Book from '../interface/Book';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BorrowedBookService {
  //properties
  private dataServiceSubscription: Subscription = new Subscription();
  private currentUser: User = {} as User;
  public borrowedBooks: Book[] = [];

  //constructor
  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private userService: UserService
  ) {}

  //custom methods
  public borrowBook(book: Book): void {
    //BOOK - updating clientside
    book.available = false;
    this.dataService.setClickedBook(book);

    //BOOK - updating serverside
    const urlBook = 'http://localhost:8080/book/patchBook';
    this.apiService.patch(urlBook, book).subscribe();

    //BORROWEDBOOK - updating serverside
    this.getUser(); //replace this with ngOnInit?
    const urlBb = 'http://localhost:8080/borrowedBook/addBorrowedBook';
    const newBb = {
      userId: this.currentUser.id,
      bookId: book.id,
    };
    this.apiService.post(urlBb, newBb).subscribe();

    //USER - updating clientside
    this.getUser();
  }

  public patchBorrowedBook(borrowedBook: BorrowedBook): void {
    const url = `http://localhost:8080/borrowedBook/patchBorrowedBook`;
    this.apiService.patch(url, borrowedBook).subscribe();
  }

  private getUser(): void {
    this.dataService.getCurrentUser().subscribe((value) => {
      this.currentUser = value;
    });
  }

  public returnBorrowedBook(borrowedBook: BorrowedBook): void {
    const url = `http://localhost:8080/borrowedBook/returnBorrowedBook`;
    this.apiService.patch(url, borrowedBook).subscribe();
  }
}
