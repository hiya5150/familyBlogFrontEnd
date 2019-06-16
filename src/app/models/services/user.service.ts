import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http:localhost/familyBlogBackEnd/';
  constructor(private http: HttpClient) {}

  public login(): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'login', this.baseUrl);
  }

}
