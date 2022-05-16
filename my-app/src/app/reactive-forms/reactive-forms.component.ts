import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  formularioContacto = this.fb.group({
    nombre: ['Mateo'],
    email: [''],
    mensaje: ['Este es mi mensaje de prueba']
  });

  submit() {
    console.log(this.formularioContacto.value);
  }


}
