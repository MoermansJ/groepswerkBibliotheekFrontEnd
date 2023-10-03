import { Component } from '@angular/core';
import {ApiService} from "../../service/api.service";
import Book from "../../interface/Book";

@Component({
  selector: 'app-delete-book-page',
  templateUrl: './delete-book-page.component.html',
  styleUrls: ['./delete-book-page.component.css']
})
export class DeleteBookPageComponent {
    public search: string = '';
    public book: Book = {} as Book;

  constructor(private apiService: ApiService) {
  }

  public searchById(): void {
    let url = `http://localhost:8080/book/getBookById?search=${this.search}`;
    console.log("button clicked");


    this.apiService.get(url).subscribe({
      next:(response: Book) => {
        this.book = response;
        console.log(response);
      },
      error: (error: any) => console.log(error)});


  }

  public deleteById(): void {
    let url = "http://localhost:8080/book/deleteBookById";

    this.apiService.delete(url).subscribe();





  }

}
