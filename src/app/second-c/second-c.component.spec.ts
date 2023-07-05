import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SECONDCComponent } from './second-c.component';

describe('SECONDCComponent', () => {
  let component: SECONDCComponent;
  let fixture: ComponentFixture<SECONDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SECONDCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SECONDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
