import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private baseURL="http://localhost:8080/doctors";

  constructor(private httpClient: HttpClient) { }
  
  getDoctorList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(this.baseURL);
  }
}
