import { Component, Input, OnInit } from '@angular/core';
import Book from 'src/app/interface/Book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  //properties
  @Input() book: Book;

  //constructor
  constructor() {
    this.book = {} as Book;
  }

  //getters & setters

  //custom methods
  ngOnInit() {}
}
