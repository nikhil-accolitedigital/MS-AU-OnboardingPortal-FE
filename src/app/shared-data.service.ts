import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  editableData : any;
  constructor() { }

  setData(editableData:any):any{
    this.editableData = editableData;
  }
  
  getData(){
    return this.editableData;
  }
}
