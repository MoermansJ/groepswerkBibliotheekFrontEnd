import { Component, OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import BorrowedBook from '../../interface/BorrowedBook';
import { BorrowedBookService } from 'src/app/service/borrowedbook.service';
import User from 'src/app/interface/User';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit, OnDestroy {
  //properties
  private dataServiceSubscription: Subscription = new Subscription();
  public borrowedBooks: BorrowedBook[] = [];
  public currentUser: User = {} as User;

  //constructor
  constructor(
    private dataService: DataService,
    private borrowedBookService: BorrowedBookService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit() {
    //subscribing to dataService
    this.dataServiceSubscription = this.dataService
      .getCurrentUser()
      .subscribe((value: User) => {
        this.currentUser = value;
      });
  }

  ngOnDestroy() {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public getBorrowedBooks(): void {
    console.log('cu ' + this.currentUser.password);
    // this.borrowedBookService.getBorrowedBooks(
    //   this.currentUser.borrowedBookIdList
    // );
  }
}
