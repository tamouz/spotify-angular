import { Component, Input, OnInit ,} from '@angular/core';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() public artist:any;
  public imageSrc:string="../../assets/images/istockphoto-140266946-612x612.jpg";
  starRating=0;
  array=[];
  rating:number=0;
  constructor() { }

  ngOnInit(): void {
    if(this.artist.images.length !=0){
      this.imageSrc = this.artist.images[0].url;
    }
    this.rating = this.artist.popularity/100*5;
  }
}
