import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THIRDCComponent } from './third-c.component';

describe('THIRDCComponent', () => {
  let component: THIRDCComponent;
  let fixture: ComponentFixture<THIRDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ THIRDCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(THIRDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
