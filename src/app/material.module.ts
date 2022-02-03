import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {  MatSnackBarModule } from '@angular/material/snack-bar';


const MaterialComponent = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
]

@NgModule({
    imports: [MaterialComponent],
    exports: [MaterialComponent]
  })
  export class MaterialModule { }
  