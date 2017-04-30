import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentparticipleComponent } from './presentparticiple.component';

describe('PresentparticipleComponent', () => {
  let component: PresentparticipleComponent;
  let fixture: ComponentFixture<PresentparticipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentparticipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentparticipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
