import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './page/login/login.component';
import { BookComponent } from './page/book/book/book.component';
import { BookCardComponent } from './component/book-card/book-card.component';
import { RegisterComponent } from './page/register/register.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { AddBookPageComponent } from './page/add-book-page/add-book-page.component';
import { DeleteBookPageComponent } from './page/delete-book-page/delete-book-page.component';
import { NgOptimizedImage } from "@angular/common";
import { UserPageComponent } from './page/user-page/user-page.component';
import { AllBooksPageComponent } from './page/all-books-page/all-books-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { ConstructionPageComponent } from './page/construction-page/construction-page.component';
import { CategoryCardBigComponent } from './component/category-card-big/category-card-big.component';
import { CategoryCardSmallComponent } from './component/category-card-small/category-card-small.component';


@NgModule({
  declarations: [
    //Angular - common
    AppComponent,
    NavbarComponent,

    //Jonathan
    HomeComponent,
    AllBooksPageComponent,
    CategoryPageComponent,
    BookComponent,
    BookCardComponent,
    ConstructionPageComponent,
    CategoryCardBigComponent,

    //Dmytro
    AdminPageComponent,
    AddBookPageComponent,
    DeleteBookPageComponent,

    //Abderrahman
    LoginComponent,

    //Huseyin
    UserPageComponent,
    RegisterComponent,
    CategoryCardSmallComponent,

    //TO SORT
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
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
