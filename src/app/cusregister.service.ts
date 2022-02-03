import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Registration } from './Registration';

@Injectable({
  providedIn: 'root'
})
export class CusregisterService {
  private url: string = 'http://localhost:8080/sbsmvcproj/registration';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  createRegistration(registration: any): Observable<Registration> {
    console.log(registration);
    return this.http
      .post<Registration>(
        this.url + '/createRegister',
        JSON.stringify(registration),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
