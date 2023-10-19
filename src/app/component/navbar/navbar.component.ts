import { Component, OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

import User from 'src/app/interface/User';
import { BookService } from 'src/app/service/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  private previousSearch: string = '';
  public showNavbar: boolean = true;
  private hideNavbarPages: string[] = [
    'admin-page',
    'add-book-page',
    'delete-book-page',
  ];

  //data service
  private dataServiceSubscription: Subscription = new Subscription();
  public currentUser: User = {} as User;

  //constructor
  constructor(
    private bookService: BookService,
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        const currentRoute =
          this.activatedRoute.root.firstChild?.snapshot.url.join('/');

        if (currentRoute) {
          if (this.hideNavbarPages.includes(currentRoute as string)) {
            this.showNavbar = false;
          } else {
            this.showNavbar = true;
          }
        }
      });
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
    localStorage.clear();
    this.router.navigate(['']);
  }

  public handleClickAllBooks(): void {
    this.bookService.getAllBooks();
  }
}
