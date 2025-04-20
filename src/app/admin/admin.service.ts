// src/app/services/data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = environment.ApiUrl; // Update with your API base URL
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  constructor(private http: HttpClient) {}

  // Banner Methods
  addBanner(banner: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/banner/add-banner`, banner).pipe(catchError(this.errorMgmt));
  }

  getBanners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/banner/get-banner`, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  deleteBanner(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/banner/deletebanner/${id}`);
  }

  updateBanner(banner:any,id:any){
    return this.http.put(`${this.apiUrl}/banner/update-banner/${id}`, banner);
  }

  // Teacher Methods
  addTeacher(teacher: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/teacher/add-teacher`, teacher);
  }

  getTeachers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/teacher/get-teacher`);
  }

  deleteTeacher(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/teacher/deleteteacher/${id}`);
  }

  // Review Methods
  addReview(review: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/review/add-reviews`, review);
  }

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/review/get-reviews`);
  }

  deleteReview(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/review/deletereviews/${id}`);
  }

  // Course Methods
  addCourse(course: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/buy-course/add-courses`, course);
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/buy-course/get-courses`);
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/buy-course/deletecourses/${id}`);
  }

  // Contact Methods
  addContact(contact: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact/add-contacts`, contact);
  }

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contact/get-contacts`);
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/contact/delete-contacts/${id}`);
  }
  addResult(contact: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/result/add-result`, contact);
  }

  getResult(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/result/get-result`);
  }

  deleteResult(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/result/deleteResult/${id}`);
  }

  updateResult(id:string,data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/result/update-result/${id}`,data);
  
  }
  addEvent(event: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/event/add-event`, event);
  }

  getEvent(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/event/get-event`);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/event/deleteEvent/${id}`);
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
