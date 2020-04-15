import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', component: PanelComponent, children: [
    {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
    {path: 'pricing', loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule)},
    {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
    {path: 'tests', loadChildren: () => import('./pages/tests/tests.module').then(m => m.TestsModule)},
    {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
