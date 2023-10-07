import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Book from 'src/app/interface/Book';
import { ApiService } from 'src/app/service/api.service';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  //properties
  public genres: string[] = [];
  public newestBooks: Book[] = [];
  private dataServiceSubscription: Subscription = new Subscription();

  //constructor
  constructor(
    private router: Router,
    private dataService: DataService,
    private bookService: BookService,
    private apiService: ApiService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    this.bookService.getAllGenres();

    //data service subscriptions
    this.dataServiceSubscription = this.dataService
      .getGenres()
      .subscribe((value) => {
        this.genres = value;
      });

    //apiService - move this logic to bookService if it needs to be used elsewhere
    const url = 'http://localhost:8080/book/getNewestBooks';
    this.apiService.get(url).subscribe({
      next: (response: Book[]) => (this.newestBooks = response),
      error: (error: any) => console.log(error),
    });
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public handleCardClick(book: Book): void {
    //waiting for routerLink to load book-page first, so it can listen to clickedBook change
    setTimeout(() => {
      this.dataService.setClickedBook(book);
    }, 1);
  }
}
