import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmaIntermediateComponent } from './cma-intermediate.component';

describe('CmaIntermediateComponent', () => {
  let component: CmaIntermediateComponent;
  let fixture: ComponentFixture<CmaIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmaIntermediateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmaIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
