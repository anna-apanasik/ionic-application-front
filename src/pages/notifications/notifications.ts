import { Component } from '@angular/core';
import {AlertController, ModalController, NavController, NavParams, Platform} from 'ionic-angular';
import {ILocalNotification, LocalNotifications} from "@ionic-native/local-notifications";
import {CreateNotificationModalPage} from "../create-notification-modal/create-notification-modal";
import {Notification} from "../../models/Notification";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private localNotifications: LocalNotifications,
              private modalCtrl: ModalController,
              private platform: Platform,
              private alertCtrl: AlertController) {

      this.platform.ready()
          .then(() => {
             this.localNotifications.hasPermission()
                 .then((hasPermission) => {
                     if(!hasPermission) {
                          this.alertCtrl.create({
                              title: 'Notifications',
                              message: 'Allow notifications?',
                              buttons: [
                                  {
                                      text: 'Cancel',
                                      role: 'cancel',
                                      handler: () => {
                                      }
                                  },
                                  {
                                      text: 'Allow',
                                      handler: () => {
                                          this.localNotifications.requestPermission()
                                              .then(() => {})
                                      }
                                  }
                              ]
                          });
                     } else {
                         alert('ect\' y men9 ');
                     }
                 });
          });
  }

  createNotification() {
      this.platform.ready()
          .then(() => {
              let createNoteModal = this.modalCtrl.create(CreateNotificationModalPage);
              createNoteModal.present();
              createNoteModal.onDidDismiss((data: Notification) => {
                  // this.localNotifications.schedule(data);
                  this.localNotifications.schedule({
                      id: 1,
                      title: 'Hi',
                      text: 'how is it going?'
                  })
              });
          })
  }
}
