import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectandindirectComponent } from './directandindirect.component';

describe('DirectandindirectComponent', () => {
  let component: DirectandindirectComponent;
  let fixture: ComponentFixture<DirectandindirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectandindirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectandindirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
