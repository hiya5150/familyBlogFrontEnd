import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UserService} from '../../../models/services/user.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // properties for name, username, password
  name: string;
  username: string;
  password: string;
  type: string;

  // MatDialogRef refers to dialog box used for login. router is for using the router to redirect page
  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
              private dialog: MatDialog,
              private router: Router,
              private userService: UserService
              ) {}
  ngOnInit() {
  }
  // on form submission, check type and register.
  // if registered successfully, it open login dialog
  onSubmit() {
    this.userService.register(this.name, this.username, this.password, this.type)
      .subscribe((res) => {
        if (res.success === true) {
          this.dialogRef.close();
          // this.openLogin();
        }
      });

  }

}
