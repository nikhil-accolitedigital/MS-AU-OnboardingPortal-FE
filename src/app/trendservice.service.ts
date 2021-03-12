import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendserviceService {

  constructor(private http: HttpClient) { }
  TRENDS_LOCATION = "/trends/getLocation";
  TRENDS_SKILLS="/trends/getSkills";
  TRENDS_BGC="/trends/getBGC";
  TRENDS_ONBOARDING="/trends/getOnboarding";

  public getLoc() {
    return this.http.get(this.TRENDS_LOCATION);
  }

  public getSkills(){
    return this.http.get(this.TRENDS_SKILLS);

  }

  public getBGC(){
    return this.http.get(this.TRENDS_BGC);
  }

  public getOnboarding(){
    return this.http.get(this.TRENDS_ONBOARDING);
  }

}
