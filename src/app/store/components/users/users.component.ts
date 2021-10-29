import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Array<User> = [
    {
      userName: 'User x',
      fname: 'Ali',
      lname: 'Niosh Afrini',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

interface User {
  userName;
  fname;
  lname;
}
