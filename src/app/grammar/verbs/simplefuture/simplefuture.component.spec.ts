import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplefutureComponent } from './simplefuture.component';

describe('SimplefutureComponent', () => {
  let component: SimplefutureComponent;
  let fixture: ComponentFixture<SimplefutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplefutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplefutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
