import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoryComponent } from './story/story.component';
import { NbIconModule, NbTooltipModule } from '@nebular/theme';
import { ProfileModule } from '../profile/profile.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbEvaIconsModule,
    NbIconModule,
    NbTooltipModule,
    ProfileModule,
    FormsModule
  ],

})
export class HomeModule { }
