import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEVENTHCComponent } from './seventh-c.component';

describe('SEVENTHCComponent', () => {
  let component: SEVENTHCComponent;
  let fixture: ComponentFixture<SEVENTHCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEVENTHCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEVENTHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
