import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroconditionalComponent } from './zeroconditional.component';

describe('ZeroconditionalComponent', () => {
  let component: ZeroconditionalComponent;
  let fixture: ComponentFixture<ZeroconditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroconditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroconditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
