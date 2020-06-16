import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { WeekDaysService } from '../week-days.service';

@Component({
  selector: 'app-edit-week-days',
  templateUrl: './edit-week-days.component.html',
  styleUrls: ['./edit-week-days.component.scss']
})
export class EditWeekDaysComponent implements OnInit {

  weekDaysForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private weekDaysService: WeekDaysService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.weekDaysForm = this.fb.group({
      day: '',
      currentTime: ''
    });
    const id = this.activeRoute.snapshot.params.id;
    const editItem = this.weekDaysService.weeksDate[id];
    this.weekDaysForm.patchValue({
      day: editItem.day,
      currentTime: editItem.currentTime
    });

  }
  onSave() {
    // all save logic goes here.
  }

  onCancel() {
    this.router.navigateByUrl('weekdays');
  }

}
