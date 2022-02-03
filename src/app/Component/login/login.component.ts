import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin!: boolean;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private service: LoginService,
              private snackbar: MatSnackBar,
    ) { }

  form!:FormGroup;

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    this.service.login(this.form.value).subscribe((result: any) => {
      this.snackbar.open('Log in successful', 'close', { duration: 2000 })
    });
  }
  register() {
    this.router.navigate(['/register']);
  }
}
