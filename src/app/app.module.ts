import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './page/book/book.component';
import { BookCardComponent } from './component/book-card/book-card.component';
import { RegisterComponent } from './page/register/register.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { AddBookPageComponent } from './page/add-book-page/add-book-page.component';
import { DeleteBookPageComponent } from './page/delete-book-page/delete-book-page.component';
import { UserPageComponent } from './page/user-page/user-page.component';
import { AllBooksPageComponent } from './page/all-books-page/all-books-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { ConstructionPageComponent } from './page/construction-page/construction-page.component';
import { CategoryCardBigComponent } from './component/category-card-big/category-card-big.component';
import { CategoryCardSmallComponent } from './component/category-card-small/category-card-small.component';
import { NgbModule, NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { NgOptimizedImage } from '@angular/common';
import { NewBooksCarouselComponent } from './component/new-books-carousel/new-books-carousel.component';
import { WriterPageComponent } from './page/writer-page/writer-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { GalleryPageComponent } from './page/gallery-page/gallery-page.component';
import { AllBorrowedBooksPageComponent } from './page/all-borrowed-books-page/all-borrowed-books-page.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllBooksPageComponent,
    CategoryPageComponent,
    BookComponent,
    BookCardComponent,
    ConstructionPageComponent,
    CategoryCardBigComponent,
    NewBooksCarouselComponent,
    AdminPageComponent,
    AddBookPageComponent,
    DeleteBookPageComponent,
    LoginComponent,
    UserPageComponent,
    RegisterComponent,
    CategoryCardSmallComponent,
    WriterPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    GalleryPageComponent,
    AllBorrowedBooksPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarousel,
    NgbSlide,
    NgOptimizedImage,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
