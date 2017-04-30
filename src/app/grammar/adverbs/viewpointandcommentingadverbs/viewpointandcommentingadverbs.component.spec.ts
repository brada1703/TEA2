import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpointandcommentingadverbsComponent } from './viewpointandcommentingadverbs.component';

describe('ViewpointandcommentingadverbsComponent', () => {
  let component: ViewpointandcommentingadverbsComponent;
  let fixture: ComponentFixture<ViewpointandcommentingadverbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpointandcommentingadverbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpointandcommentingadverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
