import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Onboardee } from './Models/onboardee';

@Injectable({
  providedIn: 'root'
})
export class OnboardeeserviceService {

  GET_ALL = "/onboardee/getAll";
  SAVE = "/onboardee/save";
  DELETE = "/onboardee/delete/";
  UPDATE = "/onboardee/update";

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(this.GET_ALL);
  }

  saveOnboardee(payload: Onboardee): Observable<any>{
    return this.http.post(this.SAVE,payload);
  }

  deleteOnboardee(id: Number): Observable<any>{
    return this.http.delete(this.DELETE +id);
  }

  updateOnboardee(payload: Onboardee): Observable<any>{
    return this.http.post(this.UPDATE,payload);
  }

}
