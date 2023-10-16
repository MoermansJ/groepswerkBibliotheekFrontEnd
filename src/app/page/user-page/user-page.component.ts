import { Component, OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import BorrowedBook from '../../interface/BorrowedBook';
import { BorrowedBookService } from 'src/app/service/borrowedbook.service';
import User from 'src/app/interface/User';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/service/user.service';

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
    private userService: UserService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit() {
    //refreshing user in dataservice
    this.userService.refreshUser();

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

  public handleExtendBorrowedBook(borrowedBook: BorrowedBook): void {
    //updating client side
    borrowedBook.user = {
      id: this.currentUser.id,
    } as User;
    borrowedBook.hasBeenExtended = true;

    //updating server side
    this.borrowedBookService.patchBorrowedBook(borrowedBook);
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
