import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//the get token method ​uses Spotify Implicit Grant​ ​ authentication flow the logic is used inside
//the login commpenet
export class GetTokensService {
  private ClientToken = "empty";
  constructor() {
  }
  setToken(str:string){
    this.ClientToken = str;
    localStorage.setItem('User', JSON.stringify({ token: str, name: name }));
  }
  getClientToken(){

    var currentUser = JSON.parse(localStorage.getItem('User')!);
    this.ClientToken = currentUser.token || "empty"; // your token
    return this.ClientToken;
  }

}
