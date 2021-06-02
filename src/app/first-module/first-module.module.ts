import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstModuleComponent } from './first-module.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    FirstModuleComponent,
    LoginPageComponent,
    AboutusPageComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule { }
