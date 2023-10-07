import { Component } from '@angular/core';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent {
  public isbn: string = "";
  public author: string = "";
  public title: string = "";
  public image: string = "";
  public genre: string = "";
  public description: string = "";


  constructor(private apiService: ApiService) {
  }

  public addBook(): void {
    const url = "http://localhost:8080/book/addBook"

    this.apiService.post(url, {
      isbn: this.isbn,
      author: this.author,
      title: this.title,
      isAvailable: false,
      image: this.image,
      genre: this.genre,
      description: this.description,
    }).subscribe()

    this.isbn = '';
    this.author = '';
    this.title = '';
    this.image = '';
    this.genre = '';
    this.description = '';

  }

}
