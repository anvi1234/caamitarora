import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCourseComponent } from './ca-course.component';

describe('CaCourseComponent', () => {
  let component: CaCourseComponent;
  let fixture: ComponentFixture<CaCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
