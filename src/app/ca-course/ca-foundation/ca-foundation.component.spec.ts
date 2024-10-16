import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaFoundationComponent } from './ca-foundation.component';

describe('CaFoundationComponent', () => {
  let component: CaFoundationComponent;
  let fixture: ComponentFixture<CaFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaFoundationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
