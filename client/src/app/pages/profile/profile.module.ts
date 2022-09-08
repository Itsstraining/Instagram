import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AppComponent } from 'src/app/app.component';
import { NbCardModule, NbIconModule, NbTabsetModule, NbDialogModule, NbDialogService, NbButtonModule, NbTooltipModule } from '@nebular/theme';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { ListPostComponent } from './list-post/list-post.component';
import { InfoProfileComponent } from './info-profile/info-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LoaderComponent,
    ListPostComponent,
    InfoProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NbIconModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbTooltipModule
  ],
  providers: [NbDialogService],
  exports: [
    LoaderComponent
  ]

})
export class ProfileModule { }
