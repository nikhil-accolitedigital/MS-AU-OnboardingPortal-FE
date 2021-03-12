import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import {Onboardee} from '../../Models/onboardee';
import {OnboardeeserviceService} from '../../onboardeeservice.service';
import {MatTableDataSource} from '@angular/material/table';
import { OnboardeeModule } from '../onboardee.module';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedDataService } from 'src/app/shared-data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  
  name: any;
  photo: any;
  onboardeeList: Array<Onboardee>;
  newonboardeeList: Array<Onboardee>;
  onboardee : Onboardee
  editableOnboardee : Onboardee = null
  viewOnboardee : Onboardee = null
  getOption: String
  getValue: any;

  displayedColumns: string[] = ['id', 'name','designation','demandID','onboarding', 'location' ,'skills','bgc_status','action'];
  optionList: any =[
    "name",
    "location",
    "demandID",
    "skills",
    "bgc_status"
  ];



  constructor(private router: Router, private socialuser : SocialAuthService , private service : OnboardeeserviceService, private sharedService : SharedDataService) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('name');
    this.photo = sessionStorage.getItem('photo');
    this.service.getAll().subscribe(resp=>{
      this.onboardeeList = resp;
      this.newonboardeeList = resp;
      console.log(this.onboardeeList);
    }, error => console.log(error));


  }

logout(){
  this.socialuser.signOut().then(() => this.router.navigate(['login']));
}


searchHere(){
  console.log(this.getValue);
  if(this.getOption == 'name'){

    this.onboardeeList = this.onboardeeList.filter((res)=>{
      console.log(res);
      return res.name.toLowerCase().trim().match(this.getValue.toLowerCase());
    })

  }
  else if(this.getOption == 'location'){
    this.onboardeeList = this.onboardeeList.filter((res)=>{
      console.log(res);
      return res.location.toLowerCase().trim().match(this.getValue.toLowerCase());
    })

  }

  else if(this.getOption == 'skills'){
    this.onboardeeList = this.onboardeeList.filter((res)=>{
      console.log(res);
      return res.skills.toLowerCase().trim().match(this.getValue.toLowerCase());
    })

  }

  else if(this.getOption == 'bgc_status'){
    this.onboardeeList = this.onboardeeList.filter((res)=>{
      console.log(res);
      return res.bgc_status.toLowerCase().trim().match(this.getValue.toLowerCase());
    })

  }

  else if(this.getOption == 'id'){
    this.onboardeeList = this.onboardeeList.filter((res)=>{
      console.log(res);
      return res.id == this.getValue;
    })

  }

  else if(this.getOption == 'demandID'){
    this.onboardeeList = this.onboardeeList.filter((res)=>{
      console.log(res);
      return res.demandID == this.getValue;
    })

  }
}


trends(){
  this.router.navigateByUrl('/onboardee/trends');
}

reset(){
  this.onboardeeList = this.newonboardeeList;
}


  editOnboardee(element : Onboardee){
    this.editableOnboardee = element;
    this.sharedService.setData(element);
    console.log(this.editableOnboardee);
    this.router.navigateByUrl('/onboardee/edit');
    
  }

  viewDetails(element: Onboardee){
    this.viewOnboardee =element;
    this.sharedService.setData(element);
    this.router.navigateByUrl('/onboardee/view');

  }


  deleteOnboardee(id : Number): void {
    console.log(id);
    this.service.deleteOnboardee(id).subscribe(res => {
      console.log(res);
      this.service.getAll().subscribe(resp=>{
        this.onboardeeList = resp;
    })
  },
  error => console.log(error));
}

createOnboardee(){
  console.log("executed");
  this.router.navigateByUrl('/onboardee/create');

}

filterByField(){
  console.log(this.getOption);
}
 

}
