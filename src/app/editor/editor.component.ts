import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input,Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Output('contentChange') contentEvent:EventEmitter<any> = new EventEmitter();
  @Input('mode') mode:any;
  content:any;
  
  constructor() { }

  ngOnInit() {
  }

  contentChange(){
    
    this.contentEvent.emit(this.content);
  }
}
