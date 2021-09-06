import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CheckIfLogedInService } from '../services/check-if-loged-in.service';
@Injectable({
  providedIn: 'root'
})
export class tokenGaurdGaurd implements CanActivate {
  constructor(private _router: Router,private token:CheckIfLogedInService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (this.token.isLogged())
      { return true; } this._router.navigate(['']); return false; } }
