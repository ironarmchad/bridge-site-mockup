import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipleshipComponent } from './discipleship.component';

describe('DiscipleshipComponent', () => {
  let component: DiscipleshipComponent;
  let fixture: ComponentFixture<DiscipleshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscipleshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscipleshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
