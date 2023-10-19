import { Component, OnDestroy, OnInit } from '@angular/core';
import BorrowedBook from 'src/app/interface/BorrowedBook';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-all-borrowed-books-page',
  templateUrl: './all-borrowed-books-page.component.html',
  styleUrls: ['./all-borrowed-books-page.component.css'],
})
export class AllBorrowedBooksPageComponent implements OnInit {
  //properties
  public allBorrowedBooks: BorrowedBook[] = [];

  //constructor
  constructor(private apiService: ApiService) {}

  //custom methods
  ngOnInit(): void {
    this.getAllBorrowedBooks();
  }

  public getAllBorrowedBooks(): void {
    const url = `http://localhost:8080/borrowedBook/getAllBorrowedBooks`;

    this.apiService.get(url).subscribe({
      next: (response: BorrowedBook[]) => {
        this.allBorrowedBooks = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
