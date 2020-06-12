import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { WeekDaysDto } from 'src/app/shared/models/WeekDaysDto';

@Component({
  selector: 'app-view-infomration',
  templateUrl: './view-infomration.component.html',
  styleUrls: ['./view-infomration.component.scss']
})
export class ViewInfomrationComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: WeekDaysDto) {

  }

  ngOnInit() {
  }

}
