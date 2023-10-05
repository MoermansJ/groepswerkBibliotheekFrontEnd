import { Component, OnDestroy, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import User from 'src/app/interface/User';
import { BookService } from 'src/app/service/book.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  //properties
  public search: string = '';
  public genres: string[] = [];

  //data service
  private dataServiceSubscription: Subscription = new Subscription();
  public currentUser: User = {} as User;

  //constructor
  constructor(
    private bookService: BookService,
    private dataService: DataService,
    private router: Router
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

    this.dataServiceSubscription = this.dataService
      .getGenres()
      .subscribe((value: string[]) => {
        this.genres = value;
      });
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public handleSearch(): void {
    this.bookService.getBooksByTitleOrAuthor(this.search);
  }

  public handleHomeClick(): void {
    this.bookService.getAllBooks();
  }

  public handleLogOut(): void {
    this.dataService.setCurrentUser({} as User);
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1);
  }
}
