import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { BookComponent } from './page/book/book/book.component';
import { RegisterComponent } from './page/register/register.component';
import { AddBookPageComponent } from './page/add-book-page/add-book-page.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { DeleteBookPageComponent } from './page/delete-book-page/delete-book-page.component';
import { UserPageComponent } from './page/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'add-book-page',
    component: AddBookPageComponent,
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
  },
  {
    path: 'delete-book-page',
    component: DeleteBookPageComponent,
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
