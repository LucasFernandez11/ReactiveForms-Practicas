import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroformComponent } from './heroform/heroform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormTestComponent } from './template-driven-form-test/template-driven-form-test.component';
import { Form1Component } from './form1/form1.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeroformComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormTestComponent,
    Form1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
