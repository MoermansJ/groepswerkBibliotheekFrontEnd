import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Book from '../interface/Book';
import User from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //properties
  private searchResults = new Subject<any[]>();
  private queryDescription = new Subject<string>();
  private clickedBook = new Subject<Book>();
  private currentUser = new Subject<User>();
  private genres = new Subject<string[]>();

  //constructor
  constructor() {}

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

  setQueryDescription(description: string) {
    this.queryDescription.next(description);
  }

  getQueryDescription(): Observable<string> {
    return this.queryDescription.asObservable();
  }

  setCurrentUser(user: User): void {
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  setGenres(genres: string[]): void {
    this.genres.next(genres);
  }

  getGenres(): Observable<string[]> {
    return this.genres.asObservable();
  }

  //custom methods
}
