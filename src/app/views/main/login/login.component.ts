import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {UserService} from '../../../models/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  type: string;

  // MatDialog refers to the dialog box used for the login. router is for using router to redirect page

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private userService: UserService,
    ) {}

  ngOnInit() {
  }

  // on form submission checks type and verifies
  // if verified and token received it redirect to relative homepage
  onSubmit() {
    this.userService.login(this.username, this.password, this.type).subscribe((res) => {
      if (res.token) {
        window.localStorage.setItem('token', res.token);
        this.dialogRef.close();
        this.router.navigateByUrl(`$(this.type)s/home`).then();
      }
     });
  }

}

