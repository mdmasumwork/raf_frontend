import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Authentication {
  username: String;
  password: String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(authentication: Authentication) {

    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const options = {
      withCredentials: true,
    }

    const formData = new FormData();
    formData.append('username', authentication.username.toString());
    formData.append('password', authentication.password.toString());

    return this.httpClient.post('http://localhost:8085/login', formData, options);
  }
}
