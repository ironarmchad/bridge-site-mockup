import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellUsYourStoryComponent } from './tell-us-your-story.component';

describe('TellUsYourStoryComponent', () => {
  let component: TellUsYourStoryComponent;
  let fixture: ComponentFixture<TellUsYourStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellUsYourStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellUsYourStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
