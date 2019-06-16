import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  // MatDialog refers to the dialog box used for the login. router is for using router to redirect page

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router: Router) { }

  ngOnInit() {
  }

}

// TODO create app routing module manually (I forgot to choose that option)
// TODO install moduel for matdialogref
