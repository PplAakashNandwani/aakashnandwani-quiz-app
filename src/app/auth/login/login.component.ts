import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private http: HttpClient) { }

  onSwitchMode() {
    this.router.navigate(['/signup']);
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    // const email = form.value.email;
    // const password = form.value.password;

    this.http.get<any>("http://localhost:3000/Users")
    .subscribe(res => {
      const user = res.find((a:any) => {
        return a.email === form.value.email && a.password === form.value.password;
      });
      if(user) {
        form.reset();
        this.router.navigate(['question']);
      }
      else{
        alert('User not found');
      }
    },error =>{
      alert("Something went wrong");
    })
  }

}
