import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Book from '../interface/Book';
import User from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //properties
  private searchResults = new BehaviorSubject<any[]>([]);
  private queryDescription = new BehaviorSubject<string>('');
  private clickedBook = new BehaviorSubject<Book>({} as Book);
  private currentUser = new BehaviorSubject<User>({} as User);
  private genres = new BehaviorSubject<string[]>([]);

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
