import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EditWeekDaysComponent } from './week-days/edit-week-days/edit-week-days.component';
import { ViewInfomrationComponent } from './week-days/view-infomration/view-infomration.component';
import { WeekDaysComponent } from './week-days/week-days.component';


@NgModule({
  declarations: [
    AppComponent,
    WeekDaysComponent,
    ViewInfomrationComponent,
    EditWeekDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  entryComponents:[ViewInfomrationComponent],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
