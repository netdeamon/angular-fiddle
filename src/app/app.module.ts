import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { EditorComponent } from './editor/editor.component';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AceEditorModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
