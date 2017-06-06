import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from "../pages/my-teams/my-teams";
import { TournamentsPage } from "../pages/tournaments/tournaments";
import { TeamsPage } from "../pages/teams/teams";
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';

//import {MyTeamsPage} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    HomePage,
    ListPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    HomePage,
    ListPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
