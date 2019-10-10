import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToConnectQuicklyComponent } from './how-to-connect-quickly.component';

describe('HowToConnectQuicklyComponent', () => {
  let component: HowToConnectQuicklyComponent;
  let fixture: ComponentFixture<HowToConnectQuicklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToConnectQuicklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToConnectQuicklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
