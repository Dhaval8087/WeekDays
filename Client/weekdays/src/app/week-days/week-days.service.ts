import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { HandleErrorService } from '../core/_base/crud/utils/error-handle.service';
import { BASE_PATH } from '../core/_base/variables';

@Injectable({
  providedIn: 'root'
})
export class WeekDaysService {
  basePath: string;
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_PATH) basePath: string,
    private errorHandleService: HandleErrorService
  ) {
    this.basePath = basePath;
   }
  getWeekDays() {
    return this.httpClient.get(`${this.basePath}/week/get-weekday`)
      .pipe(catchError(this.errorHandleService.handleError));
  }
}
