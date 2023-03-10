import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  error: string = '';
  constructor(private http: HttpClient, 
    private router: Router) { }

  ngOnInit() {

  }
  onSubmit()
  {    
    const data = {
      "username" : this.loginFormGroup.value.email,
      "password" : this.loginFormGroup.value.password
    }
    this.http.post("https://express-t4.onrender.com/api/login", data).subscribe((response) => {
      console.log(response);
      this.router.navigate(['\profilelist']);
    }, 
    (error: HttpErrorResponse) => {
      this.error = error.error.message;
    });
    
  }

}
