import { Component, Input, OnInit } from '@angular/core';
import { SpotfiyApiCaller } from '../services/spotify-api-caller.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-albums-search',
  templateUrl: './albums-search.component.html',
  styleUrls: ['./albums-search.component.css']
})
export class AlbumsSearchComponent implements OnInit {
  @Input()public name:string="";
  artists:any=[];
  albums:any=[];
  @Input()public artist:string="1aw0Cdl1DIrtUrUA6fGbAR";

  constructor(private _getAlbums:SpotfiyApiCaller,private route: ActivatedRoute,private _route:Router) { }
  ngOnInit(): void {
    this.name=(this.route.snapshot.paramMap.get('name')!=null)?this.route.snapshot.paramMap.get("name")!:'';
    this.artist=(this.route.snapshot.paramMap.get('artist')!=null)?this.route.snapshot.paramMap.get("artist")!:'1aw0Cdl1DIrtUrUA6fGbAR';
    this.getAlbums();
  }
  getAlbums(){
    return this._getAlbums.getAlbums(this.artist)
    .subscribe(
      data =>this.handleSuccess(data),
      error=> this.handleError(error)
    )
  }
  handleSuccess(data:any){
    if(data != null && data != undefined){
      console.log(data);
      this.albums = data.items;
    }
    // console.log(this.artists);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(error.status);
      console.error(
        `Backend returned code ${error.status}, body was: `, error.message);
        this._route.navigate(['']);

    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
