import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndefinitearticlesComponent } from './indefinitearticles.component';

describe('IndefinitearticlesComponent', () => {
  let component: IndefinitearticlesComponent;
  let fixture: ComponentFixture<IndefinitearticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndefinitearticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndefinitearticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
