import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedAPrayerComponent } from './need-a-prayer.component';

describe('NeedAPrayerComponent', () => {
  let component: NeedAPrayerComponent;
  let fixture: ComponentFixture<NeedAPrayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedAPrayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedAPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
