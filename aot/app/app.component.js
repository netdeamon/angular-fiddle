var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.content = {
            css: "",
            html: "",
            js: ""
        };
        this.logs = [];
        this.maximize = {
            demo: false,
            css: false,
            js: false,
            html: false
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.overrideConsole();
    };
    AppComponent.prototype.overrideConsole = function () {
        var _this = this;
        this.iframe.nativeElement.contentWindow.console.log = function (log) {
            _this.logs.push({
                "text": log,
                "type": "log"
            });
        };
    };
    AppComponent.prototype.clearConsole = function () {
        this.logs = [];
    };
    AppComponent.prototype.maximizecell = function (type) {
        if (this.maximize.hasOwnProperty(type)) {
            this.maximize[type] = !this.maximize[type];
        }
    };
    AppComponent.prototype.cssChange = function (content) {
        this.content.css = content;
    };
    AppComponent.prototype.htmlChange = function (content) {
        this.content.html = content;
    };
    AppComponent.prototype.jsChange = function (content) {
        this.content.js = content;
    };
    AppComponent.prototype.applyCss = function () {
        this.iframe.nativeElement.contentDocument.head.innerHTML = "<style>" + this.content.css + "</style>";
    };
    AppComponent.prototype.applyJs = function () {
        var script = document.createElement('script');
        script.innerText = this.content.js;
        this.iframe.nativeElement.contentDocument.body.appendChild(script);
    };
    AppComponent.prototype.applyHtml = function () {
        this.iframe.nativeElement.contentDocument.body.innerHTML += this.content.html;
    };
    AppComponent.prototype.run = function () {
        this.clearConsole();
        this.iframe.nativeElement.contentDocument.body.innerHTML = "";
        this.applyCss();
        this.applyHtml();
        this.applyJs();
    };
    return AppComponent;
}());
__decorate([
    ViewChild('iframe'),
    __metadata("design:type", Object)
], AppComponent.prototype, "iframe", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map