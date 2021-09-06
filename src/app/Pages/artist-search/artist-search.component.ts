import { HttpErrorResponse } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import {debounceTime,} from "rxjs/operators";
import { fromEvent, Subscription, throwError } from 'rxjs';
import { SpotfiyApiCaller } from '../../services/spotify-api-caller.service';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {


  @ViewChild('ArtistSearchInput', { static: true }) ArtistSearchInput: ElementRef|any;
  artist:string="";
  faSearchengin=faSearchengin;
  name:string="";
  searched:Boolean=false;
  //searching apifor artist functions
  artists:any = [];
  constructor(private _getArtist:SpotfiyApiCaller,private _route:Router) { }
  ngOnInit(): void {
    this.artist=this._getArtist.getHistory();
    if(this.artist != ''){
      this.searched = true;
      this.name = this.artist;
      this.writeImages();
    }
    fromEvent(this.ArtistSearchInput.nativeElement,'keyup').pipe(debounceTime(1000)).subscribe(()=>{this.writeImages()});
  }
  handleSuccess(data:any){
    if(data != null && data != undefined){
      console.log(data);
      this.searched=true;
      this.artists = data.artists.items;
    }
    this._getArtist.setHistory(this.name);
    console.log(this.artists);
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
    }
    this._route.navigate(['']);
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  //get json data using service
  public writeImages(){

    this.name=this.name.trim();
    if(this.name==""){
      return;
    }
    return this._getArtist.getArtisits(this.name).subscribe(
      data =>this.handleSuccess(data),
      error=> this.handleError(error)
    )
  }

}
