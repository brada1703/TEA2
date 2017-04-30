import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentperfectComponent } from './presentperfect.component';

describe('PresentperfectComponent', () => {
  let component: PresentperfectComponent;
  let fixture: ComponentFixture<PresentperfectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentperfectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentperfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
