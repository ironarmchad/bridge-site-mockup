import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectGroupsComponent } from './connect-groups.component';

describe('ConnectGroupsComponent', () => {
  let component: ConnectGroupsComponent;
  let fixture: ComponentFixture<ConnectGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
