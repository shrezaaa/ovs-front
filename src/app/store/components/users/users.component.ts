import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Array<any> = [
    {
      userName: 'shrezaaa',
      FName: 'reza',
      LName: 'shakeri',
      gender: 'MALE',
      phoneNo: +989226410968,
      password: 1234,
      roleKind: 'CUSTOMER',
      orders: null,
    },
    {
      userName: 'trustyAlireza',
      FName: 'alireza',
      LName: 'bayat',
      gender: 'MALE',
      phoneNo: +989023452277,
      password: 1234,
      roleKind: 'ADMIN',
      orders: null,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

interface User {
  userName;
  FName;
  LName;
  gender;
  phoneNo;
  password;
  roleKind;
  orders;
}
