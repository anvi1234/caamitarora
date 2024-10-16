import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmaComponent } from './cma.component';

describe('CmaComponent', () => {
  let component: CmaComponent;
  let fixture: ComponentFixture<CmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
