import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
  constructor(private http: HttpClient) { }
  getUserList(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
