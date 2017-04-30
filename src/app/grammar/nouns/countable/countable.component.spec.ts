import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountableComponent } from './countable.component';

describe('CountableComponent', () => {
  let component: CountableComponent;
  let fixture: ComponentFixture<CountableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
