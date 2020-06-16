import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { WeekDaysDto } from '../shared/models/WeekDaysDto';
import { ViewInfomrationComponent } from './view-infomration/view-infomration.component';
import { WeekDaysService } from './week-days.service';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent implements OnInit {

  weeksDate = [];
  displayedColumns = ['id', 'day', 'isQueryString', 'currentTime', 'actions'];
  constructor(private weekDaysService: WeekDaysService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.onLoadWeekDays();

  }
  onEdit(id) {
    this.router.navigateByUrl(`weekdays/edit`)
  }
  onDisplay(id) {
    const dialogRef = this.dialog.open(ViewInfomrationComponent, {
      data: this.weeksDate[id]
    });

  }
  onLoadWeekDays() {
    this.weekDaysService.getWeekDays().pipe(first()).subscribe((days: Array<WeekDaysDto>) => {
      this.weeksDate = days;
      this.weekDaysService.weeksDate = days;
    });
  }

}
