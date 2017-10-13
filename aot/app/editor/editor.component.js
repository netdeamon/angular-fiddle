var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
var EditorComponent = (function () {
    function EditorComponent() {
        this.contentEvent = new EventEmitter();
        this.options = {};
    }
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.options.enableBasicAutocompletion = true;
    };
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.contentChange = function () {
        this.contentEvent.emit(this.content);
    };
    return EditorComponent;
}());
__decorate([
    Output('contentChange'),
    __metadata("design:type", EventEmitter)
], EditorComponent.prototype, "contentEvent", void 0);
__decorate([
    Input('mode'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "mode", void 0);
__decorate([
    Input('content'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "content", void 0);
EditorComponent = __decorate([
    Component({
        selector: 'app-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.css']
    })
], EditorComponent);
export { EditorComponent };
//# sourceMappingURL=editor.component.js.map