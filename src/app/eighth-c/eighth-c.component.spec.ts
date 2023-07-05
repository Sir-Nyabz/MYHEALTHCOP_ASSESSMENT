import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EIGHTHCComponent } from './eighth-c.component';

describe('EIGHTHCComponent', () => {
  let component: EIGHTHCComponent;
  let fixture: ComponentFixture<EIGHTHCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EIGHTHCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EIGHTHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
