import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'noa-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 
  @Input() public items:any;

  protected deltaX: number; 
    
  constructor() { 
       
  }

  public ngOnInit(): void {
    if(this.items && this.items.length){

    }
  }

  public onResize(): void{

  }

  public swipeLeft(): void {

  }

  public swipeRigth(): void {

  }





}
