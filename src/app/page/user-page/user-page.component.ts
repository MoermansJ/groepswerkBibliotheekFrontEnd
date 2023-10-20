import { Component, OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import BorrowedBook from '../../interface/BorrowedBook';
import { BorrowedBookService } from 'src/app/service/borrowedbook.service';
import User from 'src/app/interface/User';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/service/user.service';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';

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
  public selectedAction: string = '';
  public viewAll: boolean = false;

  //constructor
  constructor(
    private dataService: DataService,
    private borrowedBookService: BorrowedBookService,
    private userService: UserService,
    private bookService: BookService,
    private router: Router
  ) {}

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
    if (borrowedBook.hasBeenExtended) return;

    //updating client side
    borrowedBook.user = {
      id: this.currentUser.id,
    } as User;
    borrowedBook.hasBeenExtended = true;

    //updating server side
    this.userService.patchUser(this.currentUser);
    this.borrowedBookService.patchBorrowedBook(borrowedBook);
  }

  public handleReturnBorrowedBook(borrowedBook: BorrowedBook): void {
    //updating client side
    this.currentUser.borrowedBookList =
      this.currentUser.borrowedBookList.filter(
        (bb) => bb.book != borrowedBook.book
      );
    borrowedBook.book.available = true;
    borrowedBook.user = {
      id: this.currentUser.id,
    } as User;

    //updating server side
    this.userService.patchUser(this.currentUser);
    this.bookService.patchBook(borrowedBook.book);
    this.borrowedBookService.returnBorrowedBook(borrowedBook);
  }

  public setSelectedAction(event: any): void {
    const button = event.target as HTMLButtonElement;
    const selectedAction = button.getAttribute('selectedAction') as string;
    this.selectedAction = selectedAction;
  }

  public toggleViewAll(): void {
    this.viewAll = !this.viewAll;
  }

  public handleBorrowedNewBook(): void {
    this.bookService.getAllBooks();
    this.router.navigate(['/all-books']);
  }
}
