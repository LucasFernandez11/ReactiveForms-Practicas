import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
formEstudiante: FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
   this.formEstudiante = this.fb.group({
     nombre: ['', Validators.required, Validators.minLength(3)],
     edad: ['', Validators.required],
     curso: ['', Validators.required, Validators.maxLength(25)],
   });
  }
  submit(){
    console.log(this.formEstudiante.value);
  }

 
}
