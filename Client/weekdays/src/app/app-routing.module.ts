import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditWeekDaysComponent } from './week-days/edit-week-days/edit-week-days.component';
import { WeekDaysComponent } from './week-days/week-days.component';


const routes: Routes = [
  { path: 'weekdays', component: WeekDaysComponent },
  { path: 'weekdays/edit', component: EditWeekDaysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
