import { Component, OnInit } from '@angular/core';
import { GetTokensService } from '../services/get-tokens.service';
import { Router } from '@angular/router';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  stateKey = 'spotify_auth_state';
  faSpotify=faSpotify;
  constructor(private _Token:GetTokensService,
    private router:Router) { }
  ngOnInit(): void {
    this.start();
  }
  start(){
    var params = this.getHashParams();
    var access_token = params.access_token,
        state = params.state,
        storedState = localStorage.getItem(this.stateKey);
    if (access_token && (state == null || state !== storedState)) {
      this.router.navigate(['']);

    } else {
      localStorage.removeItem(this.stateKey);
      if (access_token) {
        this._Token.setToken(access_token);
        this.router.navigate(['/artist']);
      } else {
      }
    }
  }




    getHashParams() {
    var hashParams:any = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  generateRandomString(length:number) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

    btnListner(){
      var client_id = 'e70f8a161db841208b419a2a602f6b27'; // Your client id
      var redirect_uri = 'http://localhost:4200/'; // Your redirect uri

      var state = this.generateRandomString(16);

      localStorage.setItem(this.stateKey, state);
      var scope = 'user-read-private user-read-email';

      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state);

      window.location.href = url;
    }


}
