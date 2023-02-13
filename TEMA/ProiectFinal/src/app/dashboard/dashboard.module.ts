import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardpageComponent,
    CardComponent,
    TableComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzTableModule,
    NzModalModule,
    NzGridModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
