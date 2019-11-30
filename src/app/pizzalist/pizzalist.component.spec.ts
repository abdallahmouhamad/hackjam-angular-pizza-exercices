import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzalistComponent } from './pizzalist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PizzalistComponent', () => {
  let component: PizzalistComponent;
  let fixture: ComponentFixture<PizzalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzalistComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
