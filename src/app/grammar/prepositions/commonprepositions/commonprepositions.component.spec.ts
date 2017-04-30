import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonprepositionsComponent } from './commonprepositions.component';

describe('CommonprepositionsComponent', () => {
  let component: CommonprepositionsComponent;
  let fixture: ComponentFixture<CommonprepositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonprepositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonprepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
