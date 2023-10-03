import { ApiService } from '../../service/api.service';
import User from '../../interface/User';
import {Component} from "@angular/core";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    // properties
    public inputEmail: string = '';
    public inputPassword: string = '';
    public loggedInMessage: string = '';


    constructor(private apiService: ApiService) {
    }


    // getters & setters

     // custom methods
    // public registerUser(): void {
    //     const url = 'http://localhost:8080/user/registerUser';
    //     const body: User = {
    //         id: 0,
    //         email: 'email',
    //         password: 'password',
    //         isAdmin: false,
    //         borrowedBookList: [],
    //     };
    //
    //     this.apiService.post(url, body).subscribe();
    // }


    public loginUser(): void {
        const url = 'http://localhost:8080/user/loginUser'
        const body: User = {
            id: 0,
            email: this.inputEmail,
            password: this.inputPassword,
            isAdmin: false,
            borrowedBookList: [],
        };

        this.apiService.post(url, body).subscribe({
            next: (response: any) => {
                console.log('Login successful', response);
            },
            error: (error: any) => {
                console.error('Login failed', error);
            },
            complete: () => {
            }
        });
    }

}
