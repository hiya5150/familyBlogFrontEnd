import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './bloggers-posts.component.html',
  styleUrls: ['./bloggers-posts.component.css']
})
export class BloggersPostsComponent implements OnInit {

  posts: Post[];
  // postId: number;
  // postTitle; string;
  // postBody: string;
  // createdOn: string;

  // declares properties that go into the posts table
 postTitle: string;
 postBody: string;
 bloggerName: string;


  constructor() { }

  ngOnInit() {
  }

}
