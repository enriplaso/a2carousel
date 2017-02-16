import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'noa-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 
  @Input() items:any;
  
  constructor() { 
       
  }

  ngOnInit() {
  
  }

}
