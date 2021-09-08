import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { GetTokensService } from './get-tokens.service';
import { from, Observable,throwError } from 'rxjs';
import {retry,catchError}from'rxjs/operators'
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
//the service spotify api caller is responsible for calling spotify api to fetch json data
export class SpotfiyApiCaller {
  //the token is provided by calling getclient service
  ClientToken=this._token.getClientToken();
  Url= "https://api.spotify.com/v1/search?&type=artist&limit=10&q=";
  albumsUrl="https://api.spotify.com/v1/artists/";
  albumsUrl2="/albums";
  headers:HttpHeaders= new HttpHeaders({
  'content-type': 'application/json',
   'Accept':'application/json','Authorization':' Bearer '+this.ClientToken});
  constructor(private _http:HttpClient,private _token:GetTokensService) {
  }
  //this method is for get artists information and is in the form https://api.spotify.com/v1/search?&type=artist&limit=10&q= **
  //while the token is sent via http headers which is a concept I strugled a little to understand
  getArtisits(qeury:string){
    return this._http.get(this.Url+qeury,{headers:this.headers});
  }
  //this method is for get artists information and is in the form https://api.spotify.com/v1/artists/{{Artist id}}/albums **
  getAlbums(name:string){
    return this._http.get(this.albumsUrl + name+this.albumsUrl2,{headers:this.headers});
  }

}
