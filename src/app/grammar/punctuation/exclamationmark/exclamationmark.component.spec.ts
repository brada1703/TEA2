import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclamationmarkComponent } from './exclamationmark.component';

describe('ExclamationmarkComponent', () => {
  let component: ExclamationmarkComponent;
  let fixture: ComponentFixture<ExclamationmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclamationmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclamationmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
