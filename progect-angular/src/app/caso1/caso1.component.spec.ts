import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caso1Component } from './caso1.component';

describe('Caso1Component', () => {
  let component: Caso1Component;
  let fixture: ComponentFixture<Caso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caso1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
