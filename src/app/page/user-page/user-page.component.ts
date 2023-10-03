import { Component } from '@angular/core';
import {ApiService} from "../../service/api.service";
import BorrowedBook from "../../interface/BorrowedBook";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  //properties
  public borrowedBooks : BorrowedBook[] = [];

  //constructor
  constructor(private apiService : ApiService) {
  }

  //getters & setters

  //custom methods
  public getBorrowedBooks() : void {
    const url = "http://localhost:8080/borrowedbook/getBorrowedBooks"
    this.apiService.get(url).subscribe({
      next: (response : BorrowedBook[]) => this.borrowedBooks = response,
      error: (error : any) => console.log(error)
    })
  }
}
