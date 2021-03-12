import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnboardeeserviceService } from 'src/app/onboardeeservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {



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

  constructor(private service: OnboardeeserviceService, private router : Router) { }

  ngOnInit(): void {

    console.log("create component executed" );
    this.updateform = new FormGroup({
      name: new FormControl("", (Validators.required, Validators.maxLength(150), Validators.minLength(3))),
      email: new FormControl("", (Validators.required)),
      dob: new FormControl("", (Validators.required)),
      contactno: new FormControl("", (Validators.required)),
      address: new FormControl("", (Validators.required)),
      demandID: new FormControl("", (Validators.required)),
      location: new FormControl("", (Validators.required)),
      skills: new FormControl("", (Validators.required)),
      eta: new FormControl("", (Validators.required)),
      bgc_status: new FormControl("", (Validators.required)),
      onboarding_status: new FormControl("", (Validators.required)),
      onboarding_date: new FormControl("", (Validators.required)),
      ms_hiring_manager: new FormControl("", (Validators.required)),
      designation: new FormControl("", (Validators.required)),
      creationTm: new FormControl(new Date()),
      lastmodifiedTm: new FormControl(new Date()),
      experience: new FormControl("", (Validators.required)),
      graduation: new FormControl("", (Validators.required)),

    });
  }


  create(){
    console.log(this.updateform.value);
    this.service.saveOnboardee(this.updateform.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/onboardee/dashboard');
  },
  error => console.log(error));
  
}

}
