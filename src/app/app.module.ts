import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { MesVoyagesPage } from '../pages/mesvoyages/mesvoyages';
import { SafartiPage } from '../pages/safarti/safarti';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FirstPage } from '../pages/first/first';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ResultsPage } from '../pages/results/results';
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
    ResultsPage
  ],
  imports: [
    BrowserModule,
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
    ResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
