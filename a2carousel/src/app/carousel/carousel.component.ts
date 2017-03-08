import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { CarouselItem } from '../shared/models/carousel-item.model'

@Component({
  selector: 'noa-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit  {
  
  @Input() public items:Array<CarouselItem>;
  
  protected currentImageIndex: number;
  protected deltaX: number; 
  protected carousel_width: number;
  protected translated_distance: number;
  protected threshold: number;
  protected isTransitioning: boolean;
  protected touchStartClientX: number; 
  @ViewChild('wraper') wraper: ElementRef; //we translate the wrapper layer

  constructor() { 
       
  }

  public ngOnInit(): void {
    this.currentImageIndex = 0;
    this.deltaX = 0;
    this.translated_distance = 0;
    this.isTransitioning = false;
    this.touchStartClientX = 0;
  }

  ngAfterViewInit() {
     if(this.items && this.items.length > 0){
       this.carousel_width = this.getWidth();
       this.translated_distance = this.translated_distance - this.carousel_width; 
       this.translateX(this.translated_distance);
       this.threshold = this.carousel_width * 0.4; 
     }
  } 

  protected setWidth(): void {
     this.carousel_width = this.items.length * 100;
     this.wraper.nativeElement.style('width', this.carousel_width+'%');
  }
  protected getWidth(): number {
    return parseInt(window.getComputedStyle(this.wraper.nativeElement).width.replace(/[^-\d\.]/g, ''));
  }

  protected onResize(): void {

  }

  public swipeLeft(): void {
    this.isTransitioning = true;
  }

  public swipeRigth(): void {
    this.isTransitioning = true;

  }
  public onTouchStart(event:any): void { 
      console.log(event);
      this.touchStartClientX = event.changedTouches[0].clientX;
  }

  public onTouchMove(event:any): void{ 
    console.log(event);
    this.wraper.nativeElement.style.transition = "none";
    this.deltaX = this.getDeltaX(event);
    this.translateX(this.deltaX + this.translated_distance);   
  }
  
  public onTouchEnd(event: any): void {
      console.log("Touch End");
      this.translated_distance =  this.translated_distance + this.deltaX;
  }

  public onTransitionEnd(event) {  
    this.isTransitioning = false;
  }

  protected translateX(distance: number): void {
     this.wraper.nativeElement.style.transform = "translate3D(" + distance + "px,0,0)";
  }

  protected getDeltaX(event: any): number{
    if(event.changedTouches){
      return event.changedTouches[0].clientX - this.touchStartClientX;
    }
    return 0;
  }
}
