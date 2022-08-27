import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
<<<<<<< HEAD
import { AppComponent } from 'src/app/app.component';
=======
import { NbCardModule, NbIconModule, NbTabsetModule, NbDialogModule, NbDialogService } from '@nebular/theme';
>>>>>>> 5f372ef5138d896132fa36c55da5783ba453c464


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    ProfileRoutingModule
  ],
  // providers: [AppComponent],
=======
    ProfileRoutingModule,
    NbIconModule,
    NbTabsetModule,
    NbCardModule,
    NbDialogModule.forRoot(),
  ],
  providers: [NbDialogService],

>>>>>>> 5f372ef5138d896132fa36c55da5783ba453c464
})
export class ProfileModule { }
