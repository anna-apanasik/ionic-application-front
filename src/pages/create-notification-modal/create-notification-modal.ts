import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {ILocalNotification} from "@ionic-native/local-notifications";

@Component({
  selector: 'page-create-notification-modal',
  templateUrl: 'create-notification-modal.html',
})
export class CreateNotificationModalPage {

  protected notification: ILocalNotification;
  protected title: string;
  protected text: string;
  protected date: string = new Date().toISOString();
  protected time:string = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  dismiss() {
      this.viewCtrl.dismiss();
  }

  save() {
      this.notification = {
          id: 1,
          title: this.title,
          text: this.text,
          trigger: { at: new Date(new Date(this.time).getTime())}
      };

      this.viewCtrl.dismiss(this.notification);
  }
}
