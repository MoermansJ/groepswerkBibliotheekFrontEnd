import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import User from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //properties

  //constructor
  constructor(
    private dataService: DataService,
    private apiService: ApiService
  ) {}

  //custom methods
  public getUserFromLocalStorage(): void {
    const lsEmail = localStorage.getItem('email');
    const url = `http://localhost:8080/user/getUserByEmail?email=${lsEmail}`;

    this.apiService.get(url).subscribe({
      next: (user: User) => this.dataService.setCurrentUser(user),
      error: (error: any) => console.log(error),
    });
  }

  public refreshUser(): void {
    this.getUserFromLocalStorage();
  }

  public patchUser(user: User): void {
    const url = `http://localhost:8080/user/patchUser`;
    this.apiService.patch(url, user).subscribe({
      next: (response: any) => {
        if (response.isPresent) this.dataService.setCurrentUser(response.value);
      },
    });

    // this.refreshUser();
  }
}
