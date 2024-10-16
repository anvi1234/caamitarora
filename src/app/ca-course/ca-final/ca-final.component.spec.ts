import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaFinalComponent } from './ca-final.component';

describe('CaFinalComponent', () => {
  let component: CaFinalComponent;
  let fixture: ComponentFixture<CaFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
