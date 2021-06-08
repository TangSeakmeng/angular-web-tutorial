import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultModuleComponent } from './default-module.component';

const routes: Routes = [{ path: '', component: DefaultModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultModuleRoutingModule { }
