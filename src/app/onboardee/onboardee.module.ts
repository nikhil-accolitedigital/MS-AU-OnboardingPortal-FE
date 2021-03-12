import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardeeRoutingModule } from './onboardee-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { TrendsComponent } from './trends/trends.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';





@NgModule({
  declarations: [DashboardComponent, EditComponent, CreateComponent, ViewComponent, TrendsComponent , NavbarComponent],
  imports: [
    CommonModule,
    OnboardeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule ,
    MatTableModule,
  MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule ,
    NgxChartsModule
  ],

  exports: [NavbarComponent]
})
export class OnboardeeModule { }
