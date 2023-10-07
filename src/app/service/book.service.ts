import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import Book from '../interface/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  //properties

  //constructor
  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  //getters & setters

  //custom methods
  public getAllBooks(): void {
    const url = 'http://localhost:8080/book/getAllBooks';

    this.apiService.get(url).subscribe({
      next: (response: Book[]) => {
        this.dataService.setSearchResults(response);
        this.dataService.setQueryDescription('All books');
      },
      error: (error: any) => console.error(error),
    });
  }

  public findBooksByGenre(genre: string): void {
    const url = `http://localhost:8080/book/getBooksByGenre?genre=${genre.toLowerCase()}`;

    this.apiService.get(url).subscribe({
      next: (response: Book[]) => {
        this.dataService.setSearchResults(response);
        this.dataService.setQueryDescription("Books in genre '" + genre + "'");
      },
      error: (error: any) => console.error(error),
    });
  }

  public getAllGenres(): void {
    const url = 'http://localhost:8080/book/getAllGenres';

    this.apiService.get(url).subscribe({
      next: (response: string[]) => {
        this.dataService.setGenres(response);
      },
      error: (error: any) => console.error(error),
    });
  }

  public getBooksByTitleOrAuthor(search: string): void {
    const url = `http://localhost:8080/book/getBooksByTitleOrAuthor?search=${search}`;

    //if empty search
    if (search.trim().length == 0) {
      this.getAllBooks();
      return;
    }

    this.apiService.get(url).subscribe({
      next: (response: Book[]) => {
        this.dataService.setSearchResults(response);
        this.dataService.setQueryDescription(
          "'" + search + "' in authors and titles"
        );
      },
      error: (error: any) => console.error(error),
    });
  }
}
