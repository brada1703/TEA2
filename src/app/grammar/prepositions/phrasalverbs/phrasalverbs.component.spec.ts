import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasalverbsComponent } from './phrasalverbs.component';

describe('PhrasalverbsComponent', () => {
  let component: PhrasalverbsComponent;
  let fixture: ComponentFixture<PhrasalverbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasalverbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasalverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
