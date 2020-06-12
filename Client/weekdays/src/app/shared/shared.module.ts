import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
