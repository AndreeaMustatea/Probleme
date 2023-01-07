import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeesRoutingModule } from './bees-routing.module';
import { CardComponent } from './card/card.component';
import { DataComponent } from './data/data.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    CardComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    BeesRoutingModule,
    NzModalModule,
    NzButtonModule,
    NzCardModule
  ]
})
export class BeesModule { }
