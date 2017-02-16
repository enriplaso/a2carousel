import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Touch friendly Carousel!';
  items:any;

  constructor() { 
    this.items = [];
    this.items[0] = {title:"Image 1", url:""};
    this.items[0] = {title:"Image 2", url:""};
    this.items[0] = {title:"Image 3", url:""};
    this.items[0] = {title:"Image 4", url:""};

  }

 
}
