import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: "login", pathMatch: "full" , component: LoginComponent},
  {path: "home", pathMatch: "full", component: HomeComponent},
  {path: "onboardee", loadChildren:()=> import ('./onboardee/onboardee.module').then(m=> m.OnboardeeModule)},
  // {path: "**", redirectTo: "/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
