import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmaFinalComponent } from './cma-final.component';

describe('CmaFinalComponent', () => {
  let component: CmaFinalComponent;
  let fixture: ComponentFixture<CmaFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmaFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
