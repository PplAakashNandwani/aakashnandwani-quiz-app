import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    const fullname = form.value.fullname;
    localStorage.setItem("name", fullname);
    // const email = form.value.email;
    // const password = form.value.password;

    this.http.post<any>("http://localhost:3000/Users",form.value)
    .subscribe(res => {
      form.reset;
      this.router.navigate(['login']);
    },err => {
      alert("Something went wrong!");
    })
  }

}
