import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PayloadTemplateComponent } from './components/payload-template/payload-template.component';
import { PayloadFieldComponent } from './components/payload-field/payload-field.component';

@NgModule({
  declarations: [
    AppComponent,
    PayloadTemplateComponent,
    PayloadFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
