import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getDoctorList() : Observable<Doctor[]>{
    console.log(this.apiUrl);
    return this.httpClient.get<Doctor[]>(`${this.apiUrl}/doctors`)
  }

  getUnverifiedDoctorList() : Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.apiUrl}/doctors/unverified`)
  }

  createDoctor(doctor: Doctor):Observable<Object>{
    return this.httpClient.post(`${this.apiUrl}/doctors`,doctor);
  }

  acceptDoctor(id: number | undefined):Observable<Object>{
    return this.httpClient.get(`${this.apiUrl}/doctors/verify/${id}`);
  }

  rejectDoctor(id: number | undefined):Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl}/doctors/${id}`);
  }

  getDoctorById(id: number| undefined):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.apiUrl}/doctors/${id}`);
  }

  deleteDoctor(id: number| undefined): Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl}/doctors/${id}`);
  }

  // deleteDoctor(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }

  // Verify a doctor (set isVerified to true while keeping the rest of the data)
  // verifyDoctor(doctor: Doctor): Observable<Object> {
  //   // Clone the doctor object and set isVerified to true
  //   const verifiedDoctor = { ...doctor, isVerified: true };
  //   console.log("service: ",verifiedDoctor)

  //   // Send the updated doctor data to the backend via PUT request
  //   return this.httpClient.post(`${this.apiUrl}/doctors`, verifiedDoctor);
  // }


}
