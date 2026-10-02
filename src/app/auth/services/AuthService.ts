import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RegisterRequest } from '../models/RegisterRequest.dto';
import { LoginRequest } from '../models/LoginRequest.dto';
import { LoginResponse } from '../models/LoginResponse.dto';

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


  //TODO

  private saveToken() { }
  private getToken() { }

}

