import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {BloggersService} from '../../../models/services/bloggers.service';

@Component({
  selector: 'app-posts',
  templateUrl: './bloggers-posts.component.html',
  styleUrls: ['./bloggers-posts.component.css']
})
export class BloggersPostsComponent implements OnInit {

  posts: Post[];
  currentPostId: number;
  currentPostTitle; string;
  createForm = {display: 'none'};
  editForm = {display: 'none'};
  createdOn: string;

  // declares properties that go into the posts table
 postTitle: string;
 postBody: string;
 bloggerName: string;

 // columns to be displayed in table

 displayedColumns: string[] = ['postTitle', 'postBody', 'createdOn'];


  constructor(private bloggerService: BloggersService) { }

  ngOnInit() {
    this.getPosts();
  }

  // this is used to show the total list
  getPosts(): void {
    this.bloggerService.getPrivatePosts().subscribe(
      (res) => {
        if (res[0]) {
          this.posts = [];
          res.forEach((item) => {
            item = new Post(item);
            this.posts.push(item);
          });
        } else {
          console.warn(res);
        }
      }
    );

  }

}

// TODO: need to do visitorService and both auths, then test if they work.
