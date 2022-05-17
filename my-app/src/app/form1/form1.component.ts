import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  formularioContacto: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioContacto = this.fb.group({
      nombre: ['' , Validators.required],
      email: ['' , [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  submit() {
    console.log(this.formularioContacto.value);
  }

}
