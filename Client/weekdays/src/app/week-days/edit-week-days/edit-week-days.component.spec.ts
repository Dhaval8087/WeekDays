import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWeekDaysComponent } from './edit-week-days.component';

describe('EditWeekDaysComponent', () => {
  let component: EditWeekDaysComponent;
  let fixture: ComponentFixture<EditWeekDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWeekDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWeekDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
