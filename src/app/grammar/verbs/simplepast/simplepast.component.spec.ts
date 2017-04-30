import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplepastComponent } from './simplepast.component';

describe('SimplepastComponent', () => {
  let component: SimplepastComponent;
  let fixture: ComponentFixture<SimplepastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplepastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplepastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
