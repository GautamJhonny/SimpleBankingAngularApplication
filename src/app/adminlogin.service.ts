import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

private url: string = 'http://localhost:8080/sbsmvcproj/adminlogin';

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

constructor(private http: HttpClient) { }

createLogin(login: any): Observable<Login> {
  console.log(login);
  return this.http
    .post<Login>(
      this.url + '/createAdminlogin',
      JSON.stringify(login),
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
