import { AuthService } from './../shared/service/auth.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  loginForm = new FormGroup({});
  disableBtn = false;
  hide = true;
  model: any = {};
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}

  onSignUp(){}
}
