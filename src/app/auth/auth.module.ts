import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { SignUpComponent } from './sign-up/sign-up.component';

const MAT_MODULE = [
  MatFormFieldModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule,
  MatTabsModule,
  MatProgressBarModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule
];

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    ...MAT_MODULE,
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
