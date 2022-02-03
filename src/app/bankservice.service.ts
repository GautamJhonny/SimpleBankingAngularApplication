import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from './Bank';


@Injectable({
  providedIn: 'root'
})
export class BankserviceService {
  transactiondetails(BankDetails: any) {
    throw new Error('Method not implemented.');
  }
  private url: string = './assets/Bank.json';


  httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getBanksFromService(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.url);
  }
 
}
