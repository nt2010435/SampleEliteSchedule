import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamHomePage } from './team-home';

@NgModule({
  declarations: [
    TeamHomePage
  ],
  imports: [
    IonicPageModule.forChild(TeamHomePage),
  ],
  exports: [
    TeamHomePage
  ]
})
export class TeamHomePageModule {}
