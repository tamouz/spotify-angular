import { Injectable } from '@angular/core';
import { GetTokensService } from './get-tokens.service';
@Injectable({
  providedIn: 'root'
})
//this service is simply a service that is used via guard to check whether the user has provided the token or not
export class CheckIfLogedInService {

  constructor(private _token:GetTokensService) { }

  isLoged():boolean{
    if(this._token.getClientToken() == "empty"){
      return false;
    }
    return true;
  }
}
