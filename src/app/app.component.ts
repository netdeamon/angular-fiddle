import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, Inject } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('iframe') iframe:any;
  title = 'app';
  content = {
    css:"",
    html:"",
    js:""
  }
  logs:Array<any> = []
  
  maximize:any = {
    demo:false,
    css:false,
    js:false,
    html:false
  }
  
  ngAfterViewInit(){
    this.overrideConsole();
  }

  overrideConsole(){
    this.iframe.nativeElement.contentWindow.console.log = (log:any)=>{
      this.logs.push(log);
    }
  }

  clearConsole(){
    this.logs = [];
  }

  maximizecell(type:string){
    if(this.maximize.hasOwnProperty(type)){
      this.maximize[type] =! this.maximize[type];
    }
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
    var script = document.createElement('script');
    script.innerText = this.content.js;    
    this.iframe.nativeElement.contentDocument.body.appendChild(script)
  }

  private applyHtml(){
    this.iframe.nativeElement.contentDocument.body.innerHTML += this.content.html;
  }

  run(){
    this.clearConsole();
    this.iframe.nativeElement.contentDocument.body.innerHTML = "";
    this.applyCss();
    this.applyHtml();
    this.applyJs();
  }
  
}
