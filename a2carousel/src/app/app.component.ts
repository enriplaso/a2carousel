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
    this.items[0] = {title:"Image 1", url:"../assets/image1.jpg"};
    this.items[1] = {title:"Image 2", url:"../assets/image2.jpg"};
    this.items[2] = {title:"Image 3", url:"../assets/image3.jpg"};
    this.items[3] = {title:"Image 4", url:"../assets/image4.jpg"};

  }

 
}
