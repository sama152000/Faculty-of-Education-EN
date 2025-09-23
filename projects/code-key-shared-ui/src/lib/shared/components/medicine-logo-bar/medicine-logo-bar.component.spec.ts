/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedicineLogoBarComponent } from './medicine-logo-bar.component';

describe('MedicineLogoBarComponent', () => {
  let component: MedicineLogoBarComponent;
  let fixture: ComponentFixture<MedicineLogoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineLogoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineLogoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
