import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Onboardee } from 'src/app/Models/onboardee';
import { OnboardeeserviceService } from 'src/app/onboardeeservice.service';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private router : Router, private sharedService : SharedDataService, private service : OnboardeeserviceService) { }

  payload : Onboardee;
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


  editableData: Onboardee;
  ngOnInit(): void {
    this.editableData = this.sharedService.getData();
    console.log("edit component :" ,this.editableData);
    this.updateform = new FormGroup({
      id: new FormControl(this.editableData.id),
      name: new FormControl(this.editableData.name, (Validators.required, Validators.maxLength(150), Validators.minLength(4))),
      email: new FormControl(this.editableData.email, (Validators.required)),
      dob: new FormControl(this.editableData.dob, (Validators.required)),
      contactno: new FormControl(this.editableData.contactno, (Validators.required)),
      address: new FormControl(this.editableData.address, (Validators.required)),
      demandID: new FormControl(this.editableData.demandID, (Validators.required)),
      location: new FormControl(this.editableData.location, (Validators.required)),
      skills: new FormControl(this.editableData.skills, (Validators.required)),
      eta: new FormControl(this.editableData.eta, (Validators.required)),
      bgc_status: new FormControl(this.editableData.bgc_status, (Validators.required)),
      onboarding_status: new FormControl(this.editableData.onboarding_status, (Validators.required)),
      onboarding_date: new FormControl(this.editableData.onboarding_date, (Validators.required)),
      ms_hiring_manager: new FormControl(this.editableData.ms_hiring_manager, (Validators.required)),
      designation: new FormControl(this.editableData.designation, (Validators.required)),
      creationTm: new FormControl(this.editableData.creationTm),
      lastmodifiedTm: new FormControl(new Date()),
      experience: new FormControl(this.editableData.experience, (Validators.required)),
      graduation: new FormControl(this.editableData.graduation, (Validators.required)),

    });
  }

  update(){
    console.log(this.updateform.value);
    this.service.updateOnboardee(this.updateform.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/onboardee/dashboard');
  },
  error => console.log(error));
  
}



}
 



