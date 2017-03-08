import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { CarouselItem } from '../shared/models/carousel-item.model'

@Component({
  selector: 'noa-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit  {
  
  @Input() public items:Array<CarouselItem>;
   
  protected deltaX: number; 
  protected carousel_width: number;
  @ViewChild('wraper') wraper: ElementRef;

  constructor() { 
       
  }

  public ngOnInit(): void {
    if(this.items && this.items.length) {

    }
  }

  ngAfterViewInit() {
    // available here
     if(this.items && this.items.length > 0){
       this.setWidth();
     }
  } 

  protected setWidth(): void {
     this.carousel_width = this.items.length * 100;
     this.wraper.nativeElement.style('width', this.carousel_width+'%');
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

  protected translateX(distance: number): void {

  }
}
