import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {UserService} from '../../models/services/user.service';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts: Post[];
  displayedColumnsPost: string[] = ['postId', 'postTitle', 'postBody', 'postAuthor', 'createdOn']


  constructor(private dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.getPosts();
  }

  openRegister(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(RegisterComponent, dialogConfig);
  }

  getPosts(): void {
    this.userService.getPosts().subscribe(
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