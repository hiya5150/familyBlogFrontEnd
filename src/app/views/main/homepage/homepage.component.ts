import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {UserService} from '../../../models/services/user.service';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts: Post[];

  displayedColumnsPost: string[] = ['postTitle', 'postBody', 'createdOn', 'bloggerName', 'bloggerId'];


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

  openLogin(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(LoginComponent, dialogConfig);
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

// TODO login and register work fine, so does loadPosts.
// TODO It's all a CORS problem. temporary solution is to run this:
// TODO chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//  TODO date I should put it somewhere on card
//  TODO author's name isn't appearing, because only id is in backend function (getPosts) need to correct this but FIRST
// TODO I need to figure out how to link blogger table to post table . there is a problem right now. can't link unique key
// TODO next step is to fix error with routing of login and register (url). there is an error.


