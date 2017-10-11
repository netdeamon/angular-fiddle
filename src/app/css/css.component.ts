import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  @Output('cssChange') cssEvent:EventEmitter<any> = new EventEmitter();
  css:any;
  constructor() { }

  ngOnInit() {
  }

  cssChange(){
    console.log(this.css)
    this.cssEvent.emit(this.css);
  }

}
