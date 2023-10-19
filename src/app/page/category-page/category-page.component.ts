import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  //properties
  public genres: string[] = [];
  private dataServiceSubscription: Subscription = new Subscription();

  //constructor
  constructor(
    private dataService: DataService,
    private bookService: BookService
  ) {}

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

  public handleGenreClick(genre: string): void {
    this.bookService.getBooksByGenre(genre);
  }
}
