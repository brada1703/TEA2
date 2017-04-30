import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitearticlesComponent } from './definitearticles.component';

describe('DefinitearticlesComponent', () => {
  let component: DefinitearticlesComponent;
  let fixture: ComponentFixture<DefinitearticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitearticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitearticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
