import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private utilityService: UtilityService, 
    private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res) => this.users = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
    });
  }

}
