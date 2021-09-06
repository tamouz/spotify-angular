import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ArtistSearchComponent } from './Pages/artist-search/artist-search.component';
import { AlbumsSearchComponent } from './Pages/albums-search/albums-search.component';
import { tokenGaurdGaurd } from './Guards/token-gaurd.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'artist',component:ArtistSearchComponent,canActivate:[tokenGaurdGaurd]},
  {path:'artist/:id',component:ArtistSearchComponent,canActivate:[tokenGaurdGaurd]},
  {path:'albums/:artist/:name',component:AlbumsSearchComponent,canActivate:[tokenGaurdGaurd]},
  {path:'**',redirectTo:'',pathMatch:'full'},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
