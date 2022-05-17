import { Persona } from './../models/persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-test',
  templateUrl: './template-driven-form-test.component.html',
  styleUrls: ['./template-driven-form-test.component.scss']
})
export class TemplateDrivenFormTestComponent implements OnInit {
  personaModel:Persona;
  constructor() { 
    this.personaModel = new Persona();
  }

  ngOnInit(): void {
  }
  submit(val:any){
    
  }

}
