import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor() { }
  @Input() public album:any;
  ngOnInit(): void {
  }

}
