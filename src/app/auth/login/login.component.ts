import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    id: [""],
    password: [""],
  });
  disableBtn = false;
  hide = true;
  model: any = {};
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit(): void {}

  onLogin() {
    // this.authService.login(this.model).subscribe(({ data, success }: any) => {
    // if (success) {
    const token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsInVzZXJuYW1lIjoiQXJpZWwiLCJzYWx0IjoiZWIyN2MxM2QtMDJhNi00YTQzLThkMTgtNjgyMTkyZjAyODZkIiwidXNlcklkIjoxLCJpYXQiOjE2MTAxODc2MjcsImV4cCI6MTczNTM1MTE0N30.ZR65OjQ489SMk58pjS6q2R569Hs97IDEDXY-T9CFc3r7eesJBKU4PWY9fhGISI96LmRMcSherSHKHjLJwtEH4w';
    localStorage.setItem('Token', token);
    this.router.navigate(['/ReTasker']);
    // }
    // });
  }

  onSignUp() {
    this.router.navigate(['/auth/sign-up']);
  }
}
