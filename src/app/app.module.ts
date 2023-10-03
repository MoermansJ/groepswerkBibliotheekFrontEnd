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
import {UserPageComponent} from "./page/user-page/user-page.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    BookComponent,
    BookCardComponent,
    RegisterComponent,
    UserPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
