import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../post';

@Injectable({
  providedIn: 'root'
})
export class BloggersService {
  private baseUrl = 'http://localhost/familyblogbackend/bloggers/';

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  // these functions make http call and get back Observable of type assigned
  // it includes vrification token in the header

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]> (this.baseUrl + 'posts/loadPosts', this.httpOptions);

    }

   getPrivatePosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}Posts/viewPrivatePosts}, this.httpOptions`);

  }


}
