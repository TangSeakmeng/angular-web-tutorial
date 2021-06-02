import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModuleComponent } from './first-module.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: LoginPageComponent },
      { path: 'about-us', component: AboutusPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
