import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angular-6-social-login';

import {SocialUser, SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : SocialUser;
  loggedIn: boolean;

  constructor( private router : Router, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user)=>{
      this.user = user;
      this.loggedIn = (user != null);
    })
  }

  loginWithGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res)=>{
        console.log("Successfully Signed in");
        console.log("user data : "+ res);
        this.router.navigate(['home']);
      });

  }

}
