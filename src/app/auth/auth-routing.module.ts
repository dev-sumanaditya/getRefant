import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'signup', component: SignupComponent},
    {path: 'verify', component: VerifyComponent},
    {path: '', component: LoginComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
