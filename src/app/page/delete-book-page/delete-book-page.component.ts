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
  public showConfirmation: boolean = false;
  public showSuccessMessage: boolean = false;

  constructor(private apiService: ApiService) {
  }

  public searchById(): void {
    const id = +this.search;
    if (!isNaN(id)) {
      let url = `http://localhost:8080/book/getBookById?id=${id}`;
      this.apiService.get(url).subscribe({
        next: (response: Book) => {
          this.book = response;
          console.log(response);
        },
        error: (error: any) =>
        {
          if (error.status == 404){
            console.log("Book not found")
          }
          else {
            console.log(error)
          }
        }
      });
    } else {
      console.log("Invalid id");
    }
  }

  public showConfirmationDialog() {
    this.showConfirmation = true;
  }
  public cancelDeletion(): void {
    this.showConfirmation = false;
  }

  public deleteById(): void {
    if (this.book.id) {
      let url = `http://localhost:8080/book/deleteBookById?id=${this.book.id}`;
      this.apiService.delete(url).subscribe({
        next: () => {
          this.book.description = '';
          console.log("Book deleted successfully");
          this.showSuccessMessage = true;
          this.book = {} as Book; // Clean book object
          this.clearFields();
        },
        error: (error: any) => console.log(error)
      });
    } else {
      console.log("Invalid book id");
    }
    this.showConfirmation = false;
  }
  private clearFields(): void {
    this.search = ''; // Clean search field
    this.book = {} as Book; // Clean book object
    setTimeout(() => {
      this.showSuccessMessage = false; // Hide message
    }, 3000); // in 3 sec
  }
}

