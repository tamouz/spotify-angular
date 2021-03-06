import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistSearchComponent } from './Pages/artist-search/artist-search.component';
import { ArtistComponent } from './Components/artist/artist.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { AlbumsSearchComponent } from './Pages/albums-search/albums-search.component'
import {tokenGaurdGaurd} from './Guards/token-gaurd.guard';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArtistSearchComponent,
    ArtistComponent,
    AlbumsComponent,
    AlbumsSearchComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,FontAwesomeModule,
    BrowserAnimationsModule,NgbRatingModule,
    AppRoutingModule,FormsModule,CommonModule, NgbModule, AppRoutingModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
