import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.scss']
})
export class HeroformComponent implements OnInit {
  powers=['Laser Eyes']
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  heroForm:FormGroup;
  constructor() { }

  ngOnInit(){}
  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }


}