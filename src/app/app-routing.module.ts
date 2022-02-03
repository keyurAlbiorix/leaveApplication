import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddleaveComponent } from './Component/addleave/addleave/addleave.component';
import { LeaverecordComponent } from './Component/addleave/leaverecord/leaverecord.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'addleave',
    component: AddleaveComponent
  },
  {
    path:'leave',
    component:LeaverecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
