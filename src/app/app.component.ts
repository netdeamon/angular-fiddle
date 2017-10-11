import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('iframe') iframe:any;
  title = 'app';
  content = {
    css:"",
    html:"",
    js:""
  }
  
  cssChange(content:any){
    this.content.css = content;
  }

  htmlChange(content:any){
    this.content.html = content;
  }

  jsChange(content:any){
    this.content.js = content;
  }

  private applyCss(){
    this.iframe.nativeElement.contentDocument.head.innerHTML = "<style>"+this.content.css+"</style>";
  }

  private applyJs(){
    debugger;
    var script = document.createElement('script');
    script.innerText = this.content.js;    
    this.iframe.nativeElement.contentDocument.body.appendChild(script)
  }

  private applyHtml(){
    this.iframe.nativeElement.contentDocument.body.innerHTML += this.content.html;
  }

  run(){
    this.iframe.nativeElement.contentDocument.body.innerHTML = "";
    this.applyCss();
    this.applyHtml();
    this.applyJs();
  }
}
