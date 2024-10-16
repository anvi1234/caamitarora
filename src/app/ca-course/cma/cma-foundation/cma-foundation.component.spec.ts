import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmaFoundationComponent } from './cma-foundation.component';

describe('CmaFoundationComponent', () => {
  let component: CmaFoundationComponent;
  let fixture: ComponentFixture<CmaFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmaFoundationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmaFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
