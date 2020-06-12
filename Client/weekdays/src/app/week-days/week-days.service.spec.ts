import { TestBed } from '@angular/core/testing';

import { WeekDaysService } from './week-days.service';

describe('WeekDaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekDaysService = TestBed.get(WeekDaysService);
    expect(service).toBeTruthy();
  });
});
