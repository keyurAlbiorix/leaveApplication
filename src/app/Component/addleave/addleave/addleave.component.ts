import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddleaveService } from '../addleave.service';
import { LeaverecordComponent } from '../leaverecord/leaverecord.component';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.scss']
})
export class AddleaveComponent implements OnInit {

  // addleave:FormGroup;
  leaveRecord: any;
  constructor(public dialog: MatDialog,  public addleave: AddleaveService,) {}

  ngOnInit(): void {
   this.getLeave()
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LeaverecordComponent, {
      width: '300px',
      // data: this.addleave,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
 getLeave(){
  this.addleave.getLeave().subscribe(result => {
    console.log("res", result)
    this.leaveRecord = result;
  });
}
  deleteLeave(i){
    console.log("i",i)
    this.addleave.deleteLeave(i).subscribe(result => {
      this.getLeave()
    });
  }
}
