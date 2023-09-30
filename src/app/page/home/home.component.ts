import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Book from 'src/app/interface/Book';
import { ApiService } from 'src/app/service/api.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  //properties
  public allBooks: Book[] = [];
  private dataServiceSubscription: Subscription = new Subscription();

  //constructor
  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    this.dataServiceSubscription = this.dataService
      .getSearchResults()
      .subscribe((value) => {
        this.allBooks = value; // Update the component's property
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

  // private getAllBooks(): void {
  //   const url = 'http://localhost:8080/book/getAllBooks';

  //   this.apiService.get(url).subscribe({
  //     next: (response: Book[]) => (this.allBooks = response),
  //     error: (error: any) => console.error(error),
  //   });
  // }
}
