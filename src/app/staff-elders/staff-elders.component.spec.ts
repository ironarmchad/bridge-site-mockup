import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEldersComponent } from './staff-elders.component';

describe('StaffEldersComponent', () => {
  let component: StaffEldersComponent;
  let fixture: ComponentFixture<StaffEldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffEldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffEldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
