import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDialogModule, NbToastrModule } from '@nebular/theme';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
  ]
})
export class RegisterModule { }
