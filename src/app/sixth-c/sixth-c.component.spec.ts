import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIXTHCComponent } from './sixth-c.component';

describe('SIXTHCComponent', () => {
  let component: SIXTHCComponent;
  let fixture: ComponentFixture<SIXTHCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIXTHCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SIXTHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
