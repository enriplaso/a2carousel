import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItem } from './shared/models/carousel-item.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Touch friendly Carousel!';
  public items:Array<CarouselItem>;

  constructor() { 
    this.items = [];
   
    this.items[0] = new CarouselItem();
    this.items[0].url ='../assets/image1.jpg'
    this.items[0].title = 'Image 1';

    this.items[1] = new CarouselItem();
    this.items[1].url ='../assets/image2.jpg'
    this.items[1].title = 'Image 2';
    
    this.items[2] = new CarouselItem();
    this.items[2].url ='../assets/image3.jpg'
    this.items[2].title = 'Image 3';
    
    this.items[3] = new CarouselItem();
    this.items[3].url ='../assets/image4.jpg'
    this.items[3].title = 'Image 4';
  }

 
}
