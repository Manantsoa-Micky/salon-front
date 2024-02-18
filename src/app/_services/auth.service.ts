import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AUTH_API } from '../constants/const';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', user, httpOptions);
  }

  login(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', data, httpOptions);
  }
}
