import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isLoggedIn = false
  name:String
  photo:String

  constructor(private router: Router, private socialAuthServive : SocialAuthService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('name')){
      this.isLoggedIn = true;
      this.name = sessionStorage.getItem('name');
      this.photo = sessionStorage.getItem('photo');
    }
  }
  logout(){
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
    sessionStorage.clear();
  }
}
