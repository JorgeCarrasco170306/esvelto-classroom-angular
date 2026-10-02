import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginForm } from '../../components/login/LoginForm/LoginForm';
import { AuthCardComponent } from '../../components/shared/AuthCardComponent/AuthCardComponent';

@Component({
  selector: 'app-login-page',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, LoginForm, AuthCardComponent],
  templateUrl: './LoginPage.html',
})
export class LoginPage {}
