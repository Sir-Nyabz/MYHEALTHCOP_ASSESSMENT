import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIRSTCComponent } from './first-c.component';

describe('FIRSTCComponent', () => {
  let component: FIRSTCComponent;
  let fixture: ComponentFixture<FIRSTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIRSTCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIRSTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
