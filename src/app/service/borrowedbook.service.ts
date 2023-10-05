import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';
import User from '../interface/User';
import BorrowedBook from '../interface/BorrowedBook';
import Book from '../interface/Book';

@Injectable({
  providedIn: 'root',
})
export class BorrowedBookService implements OnInit, OnDestroy {
  //properties
  private dataServiceSubscription: Subscription = new Subscription();
  // private currentUser: User = {} as User;
  public borrowedBooks: Book[] = [];

  //constructor
  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit() {
    //subscribing to dataService
    // this.dataServiceSubscription = this.dataService
    //   .getCurrentUser()
    //   .subscribe((value) => {
    //     this.currentUser = value;
    //   });
  }

  ngOnDestroy() {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public getBorrowedBooks(borrowedBookIdList: number[]): void {
    const url = 'http://localhost:8080/book/getBooksByBorrowedBookId';

    console.log('bbIdList' + borrowedBookIdList);

    this.apiService
      .post(url, { borrowedBookIds: borrowedBookIdList })
      .subscribe({
        next: (response: Book[]) => {
          console.log('borrowedbooks GOTTEN');
          this.borrowedBooks = response;
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }
}
