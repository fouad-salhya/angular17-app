import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_url = "http://localhost:8000/users"

  private http = inject(HttpClient)

  public createUser(user: User | any): Observable<User> {
    return this.http.post<User>(`${this.auth_url}/create`, user);
  }

  public auth(user: any): Observable<any> {
    return this.http.post<any>(`${this.auth_url}/auth`,user);
  }

  public gettAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.auth_url}/all`);
  }
}
