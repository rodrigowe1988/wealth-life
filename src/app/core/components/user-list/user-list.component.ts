import { Component, OnInit } from '@angular/core';
import { User } from '../../User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor() {}

  users: User[] = [
    {
      name: 'Rodrigo',
      age: 34,
      gender: 'Male',
      phone: '999999999',
      height: 1.76,
      weight: 84,
    },
    {
      name: 'Rodrigo',
      age: 34,
      gender: 'Male',
      phone: '999999999',
      height: 1.76,
      weight: 84,
    },
    {
      name: 'Rodrigo',
      age: 34,
      gender: 'Male',
      phone: '999999999',
      height: 1.76,
      weight: 84,
    },
  ];


  ngOnInit(): void {}


  showImc(user: User): number {
    return user.weight / (user.height * user.height);
  }
}
