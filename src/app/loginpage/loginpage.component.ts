import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html'
})
export class LoginpageComponent implements OnInit {
 public loginform!:FormGroup;
 data:any;
  constructor(private formBuilder:FormBuilder,private router:Router,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required]
      }
    )
  }
  get loginControl() { return this.loginform.controls; }
  userName!: string;
  passWord!:string;
  login()
  {
    console.log(this.loginControl['username'].value,this.loginControl['password'].value);
    if(this.loginform.invalid)
    {
      return;
    }
    this.router.navigate(['home']);
    this.userName = this.loginControl['username'].value ;
    this.passWord = this.loginControl['password'].value ;
    
    this.httpClient.post<any>('https://reqres.in/api/posts',[this.userName,this.passWord]).subscribe(data => {
        this.userName = this.loginControl['username'].value ;
        this.passWord = this.loginControl['password'].value ;
  });
}
}

