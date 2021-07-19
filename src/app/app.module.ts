import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistComponent } from './artist/artist.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsSearchComponent } from './albums-search/albums-search.component'
import {tokenGaurdGaurd} from './token-gaurd.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'artist',component:ArtistSearchComponent,canActivate:[tokenGaurdGaurd]},
  {path:'artist/:id',component:ArtistSearchComponent,canActivate:[tokenGaurdGaurd]},
  {path:'albums/:artist/:name',component:AlbumsSearchComponent,canActivate:[tokenGaurdGaurd]},
  {path:'**',redirectTo:'',pathMatch:'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArtistSearchComponent,
    ArtistComponent,
    AlbumsComponent,
    AlbumsSearchComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,FontAwesomeModule,
    BrowserAnimationsModule,NgbRatingModule,
    RouterModule.forRoot(routes),FormsModule,CommonModule, NgbModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
