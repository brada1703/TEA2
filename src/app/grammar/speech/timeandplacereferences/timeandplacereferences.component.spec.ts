import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeandplacereferencesComponent } from './timeandplacereferences.component';

describe('TimeandplacereferencesComponent', () => {
  let component: TimeandplacereferencesComponent;
  let fixture: ComponentFixture<TimeandplacereferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeandplacereferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeandplacereferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
