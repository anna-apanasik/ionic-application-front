import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";

// Native plugins
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Geolocation } from "@ionic-native/geolocation";

// Modules
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

//Pages
import { MyApp } from './app.component';
import { TabsPage } from "../pages/tabs/tabs";
import { InfoPage } from "../pages/info/info";
import { SettingsPage } from "../pages/settings/settings";
import { NoteContainerPage } from "../pages/note-container/note-container";
import { SearchPage } from "../pages/search/search";
import { NotificationsPage } from "../pages/notifications/notifications";
import { CommonSettingsPage } from "../pages/common-settings/common-settings";
import { MapPage } from "../pages/map/map";
import { StartPage } from '../pages/start/start';

//Modals
import { CreateNotificationModalPage } from "../pages/create-notification-modal/create-notification-modal";
import { CreateNoteModalPage } from "../pages/create-note-modal/create-note-modal";

// Providers
import { NoteProvider } from '../providers/note/note-provider';
import { CoreProvider } from '../providers/core/core-provider';
import { UserProvider } from '../providers/user/user-provider';

// Components
import { ComponentsModule } from "../components/components.module";


@NgModule({
  declarations: [
      MyApp,
      StartPage,
      TabsPage,
      InfoPage,
      SettingsPage,
      NoteContainerPage,
      CreateNoteModalPage,
      SearchPage,
      NotificationsPage,
      CreateNotificationModalPage,
      CommonSettingsPage,
      MapPage

  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot(),
      ComponentsModule,
      ionicGalleryModal.GalleryModalModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyA_sqCdrDJW29BxI3UwvGPfX3fohvCvykE'
      }),
      HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      TabsPage,
      InfoPage,
      SettingsPage,
      NoteContainerPage,
      CreateNoteModalPage,
      SearchPage,
      NotificationsPage,
      CreateNotificationModalPage,
      CommonSettingsPage,
      MapPage,
      StartPage
  ],
  providers: [
      StatusBar,
      SplashScreen,
      {
        provide: ErrorHandler, useClass: IonicErrorHandler
      },
      NoteProvider,
        LocalNotifications,
        Geolocation,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: ionicGalleryModal.GalleryModalHammerConfig,
        },
      CoreProvider,
      UserProvider,
  ]
})
export class AppModule {}
