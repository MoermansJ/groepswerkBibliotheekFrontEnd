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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    BookComponent,
    BookCardComponent,
    RegisterComponent,
    AdminPageComponent,
    AddBookPageComponent,
    DeleteBookPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
