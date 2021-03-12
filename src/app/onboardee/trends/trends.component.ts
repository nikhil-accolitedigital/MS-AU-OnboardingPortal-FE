import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TrendserviceService } from 'src/app/trendservice.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit ,OnChanges {

  constructor(private trendservice : TrendserviceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.trendservice.getLoc().subscribe(data=>{
      this.trendDataLoc = data;
    })

    this.trendservice.getSkills().subscribe(data=>{
      this.trendDataLoc = data;
    })

    this.trendservice.getBGC().subscribe(data=>{
      this.trendDataLoc = data;
    })

    this.trendservice.getOnboarding().subscribe(data=>{
      this.trendDataLoc = data;
    })
  }
  view: [number,number] = [600, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel1 = 'Location';
  xAxisLabel2 = 'Skills';
  xAxisLabel3 = 'BGC Status';
  xAxisLabel4 = 'Onboarding Status';
  showYAxisLabel = true;
  yAxisLabel = 'Count';
  timeline = true;
  colorScheme = "vivid";

  trendDataLoc : any;
  trendDataSkills : any;
  trendDataBGC : any;
  trendDataOnboarding : any;

  ngOnInit(): void {
    console.log(this.trendservice.getLoc().subscribe(resp=>{
      console.log(resp);
      this.trendDataLoc = resp;
      
    }, error => console.log(error)));

    console.log(this.trendservice.getSkills().subscribe(resp=>{
      this.trendDataSkills = resp;
    }, error => console.log(error)));

    console.log(this.trendservice.getBGC().subscribe(resp=>{
      this.trendDataBGC = resp;
    }, error => console.log(error)));

    console.log(this.trendservice.getOnboarding().subscribe(resp=>{
      this.trendDataOnboarding = resp;
    }, error => console.log(error)));


    

  }



}
