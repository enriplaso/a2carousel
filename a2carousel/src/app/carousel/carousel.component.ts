import { Component, OnInit, Input, ViewChild, AfterViewInit  } from '@angular/core';
import { CarouselItem } from '../shared/models/carousel-item.model'

@Component({
  selector: 'noa-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit  {
  
  @Input() public items:Array<CarouselItem>;

  protected deltaX: number; 
    
  constructor() { 
       
  }

  public ngOnInit(): void {
    if(this.items && this.items.length) {

    }
  }

  ngAfterViewInit() {
    // available here
  }

  protected onResize(): void {

  }

  public swipeLeft(): void {

  }

  public swipeRigth(): void {

  }
  public onTouchStart(event:any): void { 
      console.log(event);
  }

  public onTouchMove(event:any): void{ 
      console.log(event);
  }
  
  public onTouchEnd(event: any): void {
      console.log("Touch End");
  }
}
