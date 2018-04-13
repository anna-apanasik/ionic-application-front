import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from "@ionic-native/local-notifications";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { TabsPage } from "../pages/tabs/tabs";
import { InfoPage } from "../pages/info/info";
import { SettingsPage } from "../pages/settings/settings";
import { NoteContainerPage } from "../pages/note-container/note-container";
import { CreateNoteModalPage } from "../pages/create-note-modal/create-note-modal";
import { SearchPage } from "../pages/search/search";

import { ComponentsModule } from "../components/components.module";

import { NoteProvider } from '../providers/note/note-provider';
import { NotificationsPage } from "../pages/notifications/notifications";
import { CreateNotificationModalPage } from "../pages/create-notification-modal/create-notification-modal";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
      LoginPage,
      TabsPage,
      InfoPage,
      SettingsPage,
      NoteContainerPage,
      CreateNoteModalPage,
      SearchPage,
      NotificationsPage,
      CreateNotificationModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      LoginPage,
      TabsPage,
      InfoPage,
      SettingsPage,
      NoteContainerPage,
      CreateNoteModalPage,
      SearchPage,
      NotificationsPage,
      CreateNotificationModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteProvider,
      LocalNotifications
  ]
})
export class AppModule {}