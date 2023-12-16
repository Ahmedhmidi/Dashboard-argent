import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Service/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: String,
    password: String
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'Invalid Credentials';
  successMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  handleLogin(){
    const { username, password } = this.form;


      this.authService.login(username, password).subscribe(
        () => {
      this.isLoggedIn = true;
      this.isLoginFailed = false;
      this.successMessage = 'Login Successful';
      //redirect to main page 

    }, 
    () => {
      this.isLoggedIn = false;
      this.isLoginFailed = true;
      this.successMessage = '';
    }
      );
  }



}
