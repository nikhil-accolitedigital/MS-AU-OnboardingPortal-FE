import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { TrendsComponent } from './trends/trends.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: "dashboard", component:DashboardComponent},
   {path: "", redirectTo:"dashboard", pathMatch:"full"},
  {path:"onboardee/edit", component:EditComponent },
  {path:"onboardee/create", component:CreateComponent},
  {path:"onboardee/view", component:ViewComponent},
  {path:"onboardee/trends", component:TrendsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardeeRoutingModule { }
