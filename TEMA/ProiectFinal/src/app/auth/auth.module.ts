import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{NzButtonModule} from 'ng-zorro-antd/button';
import{NzInputModule} from 'ng-zorro-antd/input';
import{NzFormModule} from 'ng-zorro-antd/form';
import{NzCheckboxModule} from'ng-zorro-antd/checkbox'
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzCheckboxModule,
    NzTypographyModule

  ]
})
export class AuthModule { }