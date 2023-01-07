import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
const routes: Routes = [{path: 'data',component:DataComponent, loadChildren: () => import('./bees.module').then(m => m.BeesModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeesRoutingModule { }