import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NbCardModule, NbIconModule, NbTabsetModule, NbDialogModule, NbDialogService } from '@nebular/theme';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NbIconModule,
    NbTabsetModule,
    NbCardModule,
    NbDialogModule.forRoot(),
  ],
  providers: [NbDialogService],

})
export class ProfileModule { }
