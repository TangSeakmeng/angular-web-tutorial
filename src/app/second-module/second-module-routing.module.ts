import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondModuleComponent } from './second-module.component';

const routes: Routes = [{ path: '', component: SecondModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule { }
