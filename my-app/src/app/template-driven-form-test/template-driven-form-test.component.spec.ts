import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormTestComponent } from './template-driven-form-test.component';

describe('TemplateDrivenFormTestComponent', () => {
  let component: TemplateDrivenFormTestComponent;
  let fixture: ComponentFixture<TemplateDrivenFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
