import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {
  [x: string]: any;

  constructor() { }
  authUser(user: any){

    let UserArray=[{ username: 'gautam@gmail.com', password: 'Password@123',}];    
    return UserArray.find((p: { username: any; password: any; }) => p.username ===user.username && p.password === user.password);
 
   
   }
  }

