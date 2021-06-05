import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    account: [null,Validators.required],
    password: [null,Validators.required]
  });

  isSuccess = false;
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    
    
  }
  checkLogin(): void{
    console.log(this.loginForm.value);
    
    if(this.loginForm.controls.account.value === 'admin' && this.loginForm.controls.password.value === 'admin'){
      this.isSuccess = false;
      this.router.navigate(['/index']);
    }else{
      this.isSuccess = true;
    }
  }
}
