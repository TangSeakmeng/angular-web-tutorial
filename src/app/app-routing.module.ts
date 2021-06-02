import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'firstModule', loadChildren: () => import('./first-module/first-module.module').then(m => m.FirstModuleModule) },
  { path: 'secondModule', loadChildren: () => import('./second-module/second-module.module').then(m => m.SecondModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
