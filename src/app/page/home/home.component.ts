import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Book from 'src/app/interface/Book';
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
  private dataServiceSubscription: Subscription = new Subscription();

  //constructor
  constructor(
    private dataService: DataService,
    private bookService: BookService
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
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }
}
