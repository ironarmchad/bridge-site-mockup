import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodStoriesComponent } from './god-stories.component';

describe('GodStoriesComponent', () => {
  let component: GodStoriesComponent;
  let fixture: ComponentFixture<GodStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
