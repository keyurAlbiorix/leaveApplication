import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddleaveComponent } from './addleave/addleave.component';
import { LeaverecordComponent } from './leaverecord/leaverecord.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AddleaveComponent,
    LeaverecordComponent,
    MatFormFieldModule
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
  ],
  providers: [MatDatepickerModule],
})
export class AddleaveModule { }
