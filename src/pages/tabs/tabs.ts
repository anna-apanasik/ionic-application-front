import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {InfoPage} from "../info/info";
import {SettingsPage} from "../settings/settings";
import {NoteContainerPage} from "../note-container/note-container";
import {SearchPage} from "../search/search";
import {NotificationsPage} from "../notifications/notifications";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  protected tabs = {
      search: SearchPage,
      infoPage: InfoPage,
      settings: SettingsPage,
      notices: NoteContainerPage,
      notifications: NotificationsPage
  };

  home: any = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
