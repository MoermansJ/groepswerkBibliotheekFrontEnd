import { Component, OnDestroy, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

import User from 'src/app/interface/User';
import { BookService } from 'src/app/service/book.service';
import { Subscription } from 'rxjs';

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

  private previousSearch: string = '';
  public showSearchbar: boolean = true;
  public showRegisterButton: boolean = true;
  public showLoginButton: boolean = true;
  public showGenreSearch: boolean = true;

  //data service
  private dataServiceSubscription: Subscription = new Subscription();
  public currentUser: User = {} as User;

  //constructor
  constructor(
    private bookService: BookService,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
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

    // Use ActivatedRoute to check the current route and set visibility properties accordingly
    this.route.url.subscribe((segments) => {
      if (
        (segments.length > 0 && segments[0].path === 'admin-page') ||
        segments[0].path === 'add-book-page'
      ) {
        // On the admin-page route, hide unnecessary elements and show the "Back" button
        this.showSearchbar = false;
        this.showRegisterButton = false;
        this.showLoginButton = false;
        this.showGenreSearch = false;
        // this.showBackButton = true;
      }
    });
    this.handleSearch();
  }

  onEnter() {
    this.router.navigate(['']);
    this.handleSearch();
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public handleSearch(event: KeyboardEvent): void {
    //if user doesn't hit enter
    if (event.key.toUpperCase() !== 'ENTER') return;

    //if two or more consecutive empty searches
    if (
      this.search.trim().length === 0 &&
      this.previousSearch.trim().length === 0
    )
      return;

    this.previousSearch = this.search;

    //navigate to search result page & execute query
    this.router.navigate(['all-books']);
    setTimeout(() => {
      this.bookService.getBooksByTitleOrAuthor(this.search);
    }, 1);
  }

  public handleSearchClick(): void {
    this.router.navigate(['all-books']);

    if (this.search.trim().length == 0) return;

    this.bookService.getBooksByTitleOrAuthor(this.search);
  }

  public handleEnter(): void {
    this.router.navigate(['']);
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

  public handleClickAllBooks(): void {
    this.bookService.getAllBooks();
  }
}
