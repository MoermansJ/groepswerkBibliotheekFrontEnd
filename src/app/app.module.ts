import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './page/book/book/book.component';
import { BookCardComponent } from './component/book-card/book-card.component';
import { RegisterComponent } from './page/register/register.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { AddBookPageComponent } from './page/add-book-page/add-book-page.component';
import { DeleteBookPageComponent } from './page/delete-book-page/delete-book-page.component';
import { UserPageComponent } from './page/user-page/user-page.component';
import { AllBooksPageComponent } from './page/all-books-page/all-books-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConstructionPageComponent } from './page/construction-page/construction-page.component';
import { CategoryCardBigComponent } from './component/category-card-big/category-card-big.component';
import { CategoryCardSmallComponent } from './component/category-card-small/category-card-small.component';
import { NgbModule, NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
