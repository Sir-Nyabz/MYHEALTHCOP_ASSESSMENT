import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOURTHCComponent } from './fourth-c.component';

describe('FOURTHCComponent', () => {
  let component: FOURTHCComponent;
  let fixture: ComponentFixture<FOURTHCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOURTHCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOURTHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
