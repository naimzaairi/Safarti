import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from './../services/auth-service';
import { VoyageService } from './../services/voyage-service';
// Pages
import { MesVoyagesPage } from '../pages/mesvoyages/mesvoyages';
import { SafartiPage } from '../pages/safarti/safarti';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FirstPage } from '../pages/first/first';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ResultsPage } from '../pages/results/results';
import { CreateVoyagePage } from '../pages/createvoyage/createvoyage';
import { ResearchDetailPage } from '../pages/researchdetail/researchdetail';
import { MVoyPreparantPage } from '../pages/mvoypreparant/mvoypreparant';
import { MVoyParticipantPage } from '../pages/mvoyparticipant/mvoyparticipant';
//

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MesVoyagesPage,
    SafartiPage,
    HomePage,
    TabsPage,
    FirstPage,
    SignupPage,
    SigninPage,
    ResultsPage,
    CreateVoyagePage,
    ResearchDetailPage,
    MVoyParticipantPage,
    MVoyPreparantPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MesVoyagesPage,
    SafartiPage,
    HomePage,
    TabsPage,
    FirstPage,
    SignupPage,
    SigninPage,
    ResultsPage,
    CreateVoyagePage,
    ResearchDetailPage,
    MVoyParticipantPage,
    MVoyPreparantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    VoyageService
  ]
})
export class AppModule {}
