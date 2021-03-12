import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Onboardee } from 'src/app/Models/onboardee';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private sharedservice : SharedDataService, private router : Router) { }

  updateform=new FormGroup({  
    id: new FormControl(),
    name :new FormControl(),
    email: new FormControl(),
    dob : new FormControl(),
    contactno : new FormControl(),
    address : new FormControl(),
    demandID : new FormControl(),
    location : new FormControl(),
    skills : new FormControl(),
    eta : new FormControl(),
    bgc_status :new FormControl(),
    onboarding_status : new FormControl(),
    onboarding_date : new FormControl(),
    ms_hiring_manager : new FormControl(),
    creationTm : new FormControl(),
    lastmodifiedTm : new FormControl(),
    designation : new FormControl(),
    experience : new FormControl(),
    graduation : new FormControl(),
     
  }); 

  viewdata: Onboardee;
  ngOnInit(): void {
    this.viewdata = this.sharedservice.getData();
    this.updateform = new FormGroup({
      id: new FormControl(this.viewdata.id),
      name: new FormControl(this.viewdata.name, (Validators.required, Validators.maxLength(150), Validators.minLength(4))),
      email: new FormControl(this.viewdata.email, (Validators.required)),
      dob: new FormControl(this.viewdata.dob, (Validators.required)),
      contactno: new FormControl(this.viewdata.contactno, (Validators.required)),
      address: new FormControl(this.viewdata.address, (Validators.required)),
      demandID: new FormControl(this.viewdata.demandID, (Validators.required)),
      location: new FormControl(this.viewdata.location, (Validators.required)),
      skills: new FormControl(this.viewdata.skills, (Validators.required)),
      eta: new FormControl(this.viewdata.eta, (Validators.required)),
      bgc_status: new FormControl(this.viewdata.bgc_status, (Validators.required)),
      onboarding_status: new FormControl(this.viewdata.onboarding_status, (Validators.required)),
      onboarding_date: new FormControl(this.viewdata.onboarding_date, (Validators.required)),
      ms_hiring_manager: new FormControl(this.viewdata.ms_hiring_manager, (Validators.required)),
      designation: new FormControl(this.viewdata.designation, (Validators.required)),
      creationTm: new FormControl(this.viewdata.creationTm),
      lastmodifiedTm: new FormControl(new Date()),
      experience: new FormControl(this.viewdata.experience, (Validators.required)),
      graduation: new FormControl(this.viewdata.graduation, (Validators.required)),

    });
  }

  back(){
    this.router.navigateByUrl('/onboardee/dashboard');
  }
  edit(){
    this.router.navigateByUrl('/onboardee/edit');
  }

}
