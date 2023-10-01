import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import Book from 'src/app/interface/Book';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //properties
  public search: string = '';
  public genres: string[] = [];

  //constructor
  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private router: Router
  ) {}

  //getters & setters

  //custom methods
  ngOnInit(): void {
    this.handleSearch();
    this.getAllGenres();
  }

  onEnter() {
    this.router.navigate(['']);
    this.handleSearch();
  }

  public handleHomeClick(): void {
    this.getAllBooks();
  }

  public handleSearch(): void {
    let url = `http://localhost:8080/book/getBooksByTitleOrAuthor?search=${this.search}`;

    //if empty search
    if (!this.search.trim()) {
      this.getAllBooks();
      return;
    }

    this.apiService.get(url).subscribe({
      next: (response: Book[]) => {
        this.dataService.setSearchResults(response);
        this.dataService.setQueryDescription(
          "'" + this.search + "' in authors and titles"
        );
      },
      error: (error: any) => console.error(error),
    });
  }

  private getAllBooks(): void {
    const url = 'http://localhost:8080/book/getAllBooks';

    this.apiService.get(url).subscribe({
      next: (response: Book[]) => {
        this.dataService.setSearchResults(response);
        this.dataService.setQueryDescription('All books');
      },
      error: (error: any) => console.error(error),
    });
  }

  private getAllGenres(): void {
    const url = 'http://localhost:8080/book/getAllGenres';

    this.apiService.get(url).subscribe({
      next: (response: string[]) => {
        this.genres = response;
      },
      error: (error: any) => console.error(error),
    });
  }

  public findBooksByGenre(event: any): void {
    const genre = event.target.value;
    const url = `http://localhost:8080/book/getBooksByGenre?genre=${genre}`;

    this.apiService.get(url).subscribe({
      next: (response: Book[]) => {
        this.dataService.setSearchResults(response);
        this.dataService.setQueryDescription('Books in genre ' + genre);
      },
      error: (error: any) => console.error(error),
    });
  }
}
