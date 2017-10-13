import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input,Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit,AfterViewInit {
  @Output('contentChange') contentEvent:EventEmitter<any> = new EventEmitter();
  @Input('mode') mode:any;
  @Input('content') content:any;
  
  options:any = {};
  

  ngAfterViewInit() { 
    this.options.enableBasicAutocompletion = true;
  }

  ngOnInit() {
  }

  contentChange(){
    
    this.contentEvent.emit(this.content);
  }
}
