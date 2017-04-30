import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerundComponent } from './gerund.component';

describe('GerundComponent', () => {
  let component: GerundComponent;
  let fixture: ComponentFixture<GerundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
