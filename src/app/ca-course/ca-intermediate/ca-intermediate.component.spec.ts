import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaIntermediateComponent } from './ca-intermediate.component';

describe('CaIntermediateComponent', () => {
  let component: CaIntermediateComponent;
  let fixture: ComponentFixture<CaIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaIntermediateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
