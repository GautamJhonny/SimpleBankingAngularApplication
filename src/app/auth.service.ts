import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorage: any;

  constructor() { }

  authUser(user: any){

    let UserArray=[{username:'gayathri@gmail.com',password:'Password@123'}];    
    return UserArray.find((p: { username: any; password: any; }) => p.username ===user.username && p.password === user.password);
 
   
   }
  }