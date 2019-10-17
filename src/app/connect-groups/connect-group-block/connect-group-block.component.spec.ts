import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectGroupBlockComponent } from './connect-group-block.component';

describe('ConnectGroupBlockComponent', () => {
  let component: ConnectGroupBlockComponent;
  let fixture: ComponentFixture<ConnectGroupBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectGroupBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectGroupBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
