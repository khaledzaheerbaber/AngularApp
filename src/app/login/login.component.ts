import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  alertMessage : string ="";
  showAlert:boolean = false;
  constructor(private loginService: LoginService, private router:Router) { 
    this.showAlert=false;
    this.alertMessage ="";
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.loginForm.valid) {
      this.loginService.ValidateUser(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(m => {
      if(m)
       {
        this.router.navigate(['/home']);
       }
      else{
        this.showAlert=true;
        this.alertMessage ="Invalid user";
      }
    });

    }
  }
}
