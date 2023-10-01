import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import Book from 'src/app/interface/Book';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  //properties
  public bookImage: string = '';
  public bookTitle: string = '';
  public bookAuthor: string = '';
  public bookDescription: string = '';
  public bookGenre: string = '';
  private dataServiceSubscription: Subscription = new Subscription();

  //constructor
  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private router: Router
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    //subscribing to dataService
    this.dataServiceSubscription = this.dataService
      .getClickedBook()
      .subscribe((value) => {
        this.bookImage = value.image; // Update the component's property
        this.bookTitle = value.title;
        this.bookAuthor = value.author;
        this.bookDescription = value.description;
        this.bookGenre = value.genre;
      });

    //this is supposed to grant the component time to get the book values from dataService
    //its purpose is to prevent idling on /book on an empty page
    //perhaps replace the re-navigation to show an error message instead?
    setTimeout(() => {
      if (!this.bookTitle) {
        this.router.navigate(['']);
      }
    }, 200);
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  public findBooksByGenre(): void {
    const url = `http://localhost:8080/book/getBooksByGenre?genre=${this.bookGenre}`;

    this.apiService.get(url).subscribe({
      next: (response: Book[]) => {
        this.dataService.setSearchResults(response);
        this.dataService.setQueryDescription(
          'Books in genre ' + this.bookGenre
        );
      },
      error: (error: any) => console.error(error),
    });

    this.router.navigate(['']);
  }
}
