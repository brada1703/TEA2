import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsIngComponent } from './forms-ing.component';

describe('FormsIngComponent', () => {
  let component: FormsIngComponent;
  let fixture: ComponentFixture<FormsIngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsIngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
