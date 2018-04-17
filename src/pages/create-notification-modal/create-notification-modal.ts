import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {Notification} from "../../models/Notification";

@Component({
  selector: 'page-create-notification-modal',
  templateUrl: 'create-notification-modal.html',
})
export class CreateNotificationModalPage {
  protected notification: Notification = new Notification();

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  dismiss(): void {
      this.viewCtrl.dismiss();
  }

  save(): void {
      this.viewCtrl.dismiss(Notification.prepare(this.notification));
  }
}
