import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { BookComponent } from './page/book/book.component';
import { RegisterComponent } from './page/register/register.component';
import { AddBookPageComponent } from './page/add-book-page/add-book-page.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { DeleteBookPageComponent } from './page/delete-book-page/delete-book-page.component';
import { UserPageComponent } from './page/user-page/user-page.component';
import { AllBooksPageComponent } from './page/all-books-page/all-books-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { ConstructionPageComponent } from './page/construction-page/construction-page.component';

const routes: Routes = [
  //Angular - common
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'category', redirectTo: '/under-construction', pathMatch: 'full' },
  { path: 'writer', redirectTo: '/under-construction', pathMatch: 'full' },
  { path: 'publisher', redirectTo: '/under-construction', pathMatch: 'full' },
  { path: 'gallery', redirectTo: '/under-construction', pathMatch: 'full' },
  { path: 'about', redirectTo: '/under-construction', pathMatch: 'full' },
  { path: 'contact', redirectTo: '/under-construction', pathMatch: 'full' },

  //Jonathan
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'all-books',
    component: AllBooksPageComponent,
  },
  {
    path: 'category',
    component: CategoryPageComponent,
  },
  {
    path: 'under-construction',
    component: ConstructionPageComponent,
  },

  //Dmytro
  {
    path: 'admin-page',
    component: AdminPageComponent,
  },
  {
    path: 'add-book-page',
    component: AddBookPageComponent,
  },
  {
    path: 'delete-book-page',
    component: DeleteBookPageComponent,
  },

  //Abderrahman
  {
    path: 'login',
    component: LoginComponent,
  },

  //Huseyin
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'user',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
