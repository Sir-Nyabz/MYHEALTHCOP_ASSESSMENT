import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIFTHCComponent } from './fifth-c.component';

describe('FIFTHCComponent', () => {
  let component: FIFTHCComponent;
  let fixture: ComponentFixture<FIFTHCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIFTHCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIFTHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
