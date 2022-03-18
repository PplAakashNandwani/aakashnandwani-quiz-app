import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: "full"},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'question', component:QuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
