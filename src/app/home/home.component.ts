import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  user : SocialUser;
  loggedIn: boolean;
  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) {
}

ngOnInit(): void {
  sessionStorage.clear();
  this.socialAuthServive.authState.subscribe((user)=>{
    this.user = user;
    this.loggedIn = (user != null);
    sessionStorage.setItem('name',this.user.name);
    sessionStorage.setItem('photo',this.user.photoUrl);
    console.log(this.user.photoUrl);
  })
}

logout(): void {
this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
}

onboarding(): void{
  this.router.navigate(['onboardee']);
}


}
