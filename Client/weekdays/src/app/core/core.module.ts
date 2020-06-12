import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SharedModule } from '../shared/shared.module';
import { InterceptService } from './_base/crud/utils/intercept.service';
import { BASE_PATH } from './_base/variables';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.apiUrl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ]
})
export class CoreModule { }
