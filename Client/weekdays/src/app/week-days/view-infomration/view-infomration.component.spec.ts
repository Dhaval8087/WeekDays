import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInfomrationComponent } from './view-infomration.component';

describe('ViewInfomrationComponent', () => {
  let component: ViewInfomrationComponent;
  let fixture: ComponentFixture<ViewInfomrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInfomrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInfomrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
