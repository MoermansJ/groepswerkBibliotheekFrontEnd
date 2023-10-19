import { Component, Input } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-category-card-small',
  templateUrl: './category-card-small.component.html',
  styleUrls: ['./category-card-small.component.css'],
})
export class CategoryCardSmallComponent {
  //properties
  @Input() public genre: string = '';

  //constructor
  constructor(private bookService: BookService) {}

  //getters & setters

  //custom methods
  public handleClick(): void {
    this.bookService.getBooksByGenre(this.genre);
  }

  public getImageUrl(genre: string): string {
    return `assets/img/category-card-bg/${genre.toLowerCase()}.jpg`;
  }
}
