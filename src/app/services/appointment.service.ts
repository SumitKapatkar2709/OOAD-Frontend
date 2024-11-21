import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ADoctor, PatientDetails } from '../models/appointment-student';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getDoctorById(id: number| undefined):Observable<ADoctor>{
    return this.httpClient.get<ADoctor>(`${this.apiUrl}/doctors/${id}`);
  }

  /**
   * Assigns a student to an appointment.
   * @param appointmentId - The ID of the appointment to assign (can be undefined).
   * @param studentId - The ID of the student to assign (can be undefined).
   * @returns An Observable with the response from the server.
   */
  assignStudentToAppointment(
    appointmentId: number | undefined,
    studentId: number | undefined
  ): Observable<string> {
    // Ensure both IDs are defined before proceeding
    if (appointmentId === undefined || studentId === undefined) {
      throw new Error('Both appointmentId and studentId must be provided.');
    }

    const params = new HttpParams()
      .set('appointmentId', appointmentId.toString())
      .set('studentId', studentId.toString());

    return this.httpClient.put<string>(`${this.apiUrl}/students/add`, null, {
      params,
      responseType: 'text' as 'json', // Specify response type as plain text
    });
  }

  // Method to update appointment details
  // updateAppointmentDetails(appointmentId: number, updateRequest: PatientDetails): Observable<PatientDetails> {
  //   const url = `${this.apiUrl}/appointments/${appointmentId}`;
    
  //   // Send PUT request
  //   return this.httpClient.put<string>(url, updateRequest)
  //     .pipe(
  //       catchError(error => {
  //         console.error('Error updating appointment details', error);
  //         throw error; // You can handle the error appropriately in the component
  //       })
  //     );
  // }

  addPatientDetails(patientDetails: PatientDetails,appointmentId: number | undefined):Observable<Object>{
    return this.httpClient.post(`${this.apiUrl}/appointments/${appointmentId}`,patientDetails);
  }

}
