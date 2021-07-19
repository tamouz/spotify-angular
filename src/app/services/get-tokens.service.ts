import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//the get token method ​uses Spotify Implicit Grant​ ​ authentication flow the logic is used inside
//the login commpenet
export class GetTokensService {
  private ClientToken = "empty";
  constructor() { }
  setToken(str:string){
    this.ClientToken = str;
  }
  getClientToken(){
    return this.ClientToken;
  }

}
