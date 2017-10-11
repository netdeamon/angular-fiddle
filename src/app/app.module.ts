import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
import { DemoComponent } from './demo/demo.component';
import { EditorComponent } from './editor/editor.component';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CssComponent,
    JsComponent,
    DemoComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
