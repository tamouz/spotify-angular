import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GetTokensService } from '../services/get-tokens.service';
@Injectable({
  providedIn: 'root'
})
export class tokenGaurdGaurd implements CanActivate {
  constructor(private _router: Router,private token:GetTokensService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (this.token.getClientToken()!="empty")
      { return true; } this._router.navigate(['']); return false; } }
