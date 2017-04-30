import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplepresentComponent } from './simplepresent.component';

describe('SimplepresentComponent', () => {
  let component: SimplepresentComponent;
  let fixture: ComponentFixture<SimplepresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplepresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
