import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/auth.guard';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardpageComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
