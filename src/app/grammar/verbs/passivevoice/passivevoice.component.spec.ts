import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivevoiceComponent } from './passivevoice.component';

describe('PassivevoiceComponent', () => {
  let component: PassivevoiceComponent;
  let fixture: ComponentFixture<PassivevoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassivevoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassivevoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
