import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddleaveComponent } from './Component/addleave/addleave/addleave.component';
import { LeaverecordComponent } from './Component/addleave/leaverecord/leaverecord.component';
import { AddleaveService } from './Component/addleave/addleave.service';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddleaveComponent,
    LeaverecordComponent
  ],
  imports: [
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatOptionModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },AddleaveService,MatFormFieldModule,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
