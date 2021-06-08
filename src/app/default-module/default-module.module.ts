import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultModuleRoutingModule } from './default-module-routing.module';
import { DefaultModuleComponent } from './default-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DefaultModuleComponent],
  imports: [
    CommonModule,
    DefaultModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModuleModule { }
