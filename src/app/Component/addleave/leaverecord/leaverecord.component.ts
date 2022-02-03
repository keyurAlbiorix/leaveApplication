import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddleaveService } from '../addleave.service';
import * as moment from 'moment';
@Component({
  selector: 'app-leaverecord',
  templateUrl: './leaverecord.component.html',
  styleUrls: ['./leaverecord.component.scss']
})
export class LeaverecordComponent implements OnInit {

  leaveForm: FormGroup;

  leaveTypes = [
    { value: 'half' },
    { value: 'Full' }]



  constructor(private formBuilder: FormBuilder,
    public addleave: AddleaveService,
    public dialogRef: MatDialogRef<LeaverecordComponent>
  ) { }
  ngOnInit(): void {
    this.leaveForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leaveType: ['', Validators.required],
      numOfLeave: [''],
      reason: ['', Validators.required]
    })
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  submit(leaveForm): void {
    this.diffrentiateDate();

    this.addleave.addLeave(leaveForm.value).subscribe(result => {
      console.log("res", result)
    });
    this.dialogRef.close();
  }
  diffrentiateDate() {
    const startDate = this.leaveForm.value.startDate, endDate = this.leaveForm.value.endDate;
    const days = moment(endDate).diff(startDate, 'days') + 1;
    if(endDate){
       let count = this.addWeekdays(this.leaveForm.value.startDate, days)
    console.log("Count => ", count);
    this.leaveForm.controls["numOfLeave"].patchValue(count);
    }
   

    // this.leaveForm.value.endDate = 4; // for Thursday
    // this.leaveForm.value.startDate = moment().isoWeekday();

    // if (this.leaveForm.value.startDate <= this.leaveForm.value.endDate) {
    //   return moment().isoWeekday(this.leaveForm.value.endDate);
    // }

  }

  addWeekdays(date, days) {
    var counter = 0;
    if (days > 0) {
      for (let i = 0; i < days; i++) {
        var check = date.getDay(); // turns the date into a number (0 to 6)
        if (check == 0 || check == 6) {
          // Do nothing it's the weekend (0=Sun & 6=Sat)
        }
        else {
          counter++;  // It's a weekday so increase the counter
        }
        date.setDate(date.getDate() + 1); // Add a day to get the date tomorrow
      }
    }
    return counter;
  }
}