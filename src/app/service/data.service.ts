import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';
import Book from '../interface/Book';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //properties
  private searchResults: Subject<any[]> = new Subject<any[]>();
  private clickedBook: Subject<Book> = new Subject<Book>();

  //constructor
  constructor(private apiService: ApiService) {}

  //getters & setters
  setSearchResults(value: any[]) {
    this.searchResults.next(value);
  }

  getSearchResults(): Observable<any[]> {
    return this.searchResults.asObservable();
  }

  setClickedBook(book: Book) {
    this.clickedBook.next(book);
  }

  getClickedBook(): Observable<Book> {
    return this.clickedBook.asObservable();
  }

  //custom methods
}
