import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
type User = {
  name: String;
  age: Number;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<[User]> {
    return this.http.get<[User]>(`http://localhost:3001/user/test`);
  }
}
