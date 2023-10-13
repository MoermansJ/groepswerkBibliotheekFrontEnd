import { Component, OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import BorrowedBook from '../../interface/BorrowedBook';
import { BorrowedBookService } from 'src/app/service/borrowedbook.service';
import User from 'src/app/interface/User';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { ApiService } from 'src/app/service/api.service';

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
  public currentUser: User = {} as User;

  //constructor
  constructor(
    private dataService: DataService,
    private borrowedBookService: BorrowedBookService,
    private apiSerivce: ApiService
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

  // public getAllBorrowedBooks(): void {
  //   const url = `http://localhost:8080/borrowedBook/getAllBorrowedBooks`;

  //   this.apiSerivce.get(url).subscribe({
  //     next: (response: any) => {
  //       this.borrowedBooks = response;
  //       console.log(response);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     },
  //   });
  // }
}
