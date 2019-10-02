import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskHomeComponent } from './desk-home.component';

describe('DeskHomeComponent', () => {
  let component: DeskHomeComponent;
  let fixture: ComponentFixture<DeskHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
