import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RegisterRequest } from '../models/RegisterRequest.dto';
import { LoginRequest } from '../models/LoginRequest.dto';
import { LoginResponse } from '../models/LoginResponse.dto';
import { ValidateEmailRequest } from '../models/ValidateEmailRequest.dto';
import { ResendVerificationEmail } from '../models/ResendEmailVerification';
import { UserResponse } from '../models/UserResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private url = environment.apiUrl;

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.url}/auth/login`, request);
  }

  register(request: RegisterRequest) {
    return this.http.post(`${this.url}/auth/register`, request);
  }

  validateEmail(request: ValidateEmailRequest) {
    return this.http.post(`${this.url}/auth/validate-email`, request);
  }

  resendEmail(request: ResendVerificationEmail) {
    return this.http.post(`${this.url}/auth/resend-verification`, request);
  }

  me() {
    return this.http.get<UserResponse>(`${this.url}/auth/me`);
  }


  //TODO: guardar el token en el localstorage

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token')
  }

}

