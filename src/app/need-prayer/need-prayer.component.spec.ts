import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedPrayerComponent } from './need-prayer.component';

describe('NeedPrayerComponent', () => {
  let component: NeedPrayerComponent;
  let fixture: ComponentFixture<NeedPrayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedPrayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
