import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrls: ['./displayphoto.component.scss']
})
export class DisplayphotoComponent implements OnInit {

  photoUrl:string='';
  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {
    this.getPhotos();

  }

  getPhotos(){
    this.photoService.getPhotos().subscribe(data=>{
      // console.log(data.urls.regular);
      this.photoUrl=data.urls.regular;
      console.log(this.photoUrl);

    });
  }

}
