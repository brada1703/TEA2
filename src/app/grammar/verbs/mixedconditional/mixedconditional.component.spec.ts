import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedconditionalComponent } from './mixedconditional.component';

describe('MixedconditionalComponent', () => {
  let component: MixedconditionalComponent;
  let fixture: ComponentFixture<MixedconditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedconditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedconditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
