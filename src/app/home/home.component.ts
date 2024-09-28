import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getCollectionData : any;

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getCollectionData = this.getData.collectionData;
  }


  //video
  @ViewChild('backgroundVideo') video: ElementRef<HTMLVideoElement> | undefined;
  isPlaying = false;

  playVideo() {
    this.video?.nativeElement.play();
    this.isPlaying = true;
  }

  pauseVideo() {
    this.video?.nativeElement.pause();
    this.isPlaying = false;
  }

 

}
