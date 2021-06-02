import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondModuleComponent } from './second-module.component';


@NgModule({
  declarations: [SecondModuleComponent],
  imports: [
    CommonModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
