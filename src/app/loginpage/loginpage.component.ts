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
 id: any;
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
  username!: string;
  password!:string;
  login()
  {
    debugger;
    console.log(this.loginControl['username'].value,this.loginControl['password'].value);
    if(this.loginform.invalid)
    {
      return;
    }
  //  this.router.navigate(['home']);
  this.username = this.loginControl['username'].value ;
    this.password = this.loginControl['password'].value ;
   
    this.getMyBlog(this.username,this.password).subscribe(data => {
      debugger;
    console.log(data);
    if(data.isSuccess == true)
      {
        this.router.navigate(['home']);
      }
      else
      {
        console.log(data.responseMessage)
      }
        this.username = this.loginControl['username'].value ;
        this.password = this.loginControl['password'].value ;
  });


}

public getMyBlog(username : string, password:string): Observable<any> {
  debugger;
  return this.httpClient.post<any>('https://localhost:44395/api/Authentication/login', { username, password });
}
}

