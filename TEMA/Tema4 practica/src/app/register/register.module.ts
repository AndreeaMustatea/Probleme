import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterRoutingModule } from './register-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';





@NgModule({
  declarations: [
    RegisterFormComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegisterRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule
    
    
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterModule { }