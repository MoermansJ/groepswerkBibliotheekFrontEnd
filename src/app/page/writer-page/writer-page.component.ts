import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Book from 'src/app/interface/Book';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-writer-page',
  templateUrl: './writer-page.component.html',
  styleUrls: ['./writer-page.component.css'],
})
export class WriterPageComponent implements OnInit {
  //properties
  public allWriters: string[][] = [];

  //constructor
  constructor(
    private dataService: DataService,
    private bookService: BookService,
    private router: Router
  ) {}

  //custom methods
  ngOnInit(): void {
    this.bookService.getAllWriters();

    this.dataService.getWriters().subscribe((response: string[]) => {
      this.allWriters = this.groupAndSortWriters(response);
    });
  }

  public handleSearchByWriter(writer: string): void {
    this.bookService.getBooksByTitleOrAuthor(writer);
    this.router.navigate(['/all-books']);
  }

  private groupAndSortWriters(allWriters: string[]): string[][] {
    allWriters.sort();

    const groupedNames: { [key: string]: string[] } = {};

    allWriters.forEach((name) => {
      const firstCharacter = name[0].toUpperCase();

      if (!groupedNames[firstCharacter]) {
        groupedNames[firstCharacter] = [];
      }
      groupedNames[firstCharacter].push(name);
    });

    const motherArray: string[][] = Object.keys(groupedNames).map((key) => {
      return groupedNames[key].sort();
    });

    return motherArray;
  }
}
