import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //properties
  title = 'libraryAppFrontEnd';

  //constructor
  constructor(private userService: UserService) {}

  //custom methods
  ngOnInit(): void {
    this.userService.getUserFromLocalStorage();
  }
}
