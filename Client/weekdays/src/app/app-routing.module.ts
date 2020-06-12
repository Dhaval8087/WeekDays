import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeekDaysComponent } from './week-days/week-days.component';


const routes: Routes = [
  { path: 'weekdays',
    component: WeekDaysComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
