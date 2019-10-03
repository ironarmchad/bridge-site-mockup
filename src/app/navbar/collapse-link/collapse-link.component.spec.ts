import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLinkComponent } from './collapse-link.component';

describe('CollapseLinkComponent', () => {
  let component: CollapseLinkComponent;
  let fixture: ComponentFixture<CollapseLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
