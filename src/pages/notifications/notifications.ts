import { Component } from '@angular/core';
import {AlertController, ModalController, NavController, NavParams, Platform} from 'ionic-angular';
import {ILocalNotification, LocalNotifications} from "@ionic-native/local-notifications";
import {CreateNotificationModalPage} from "../create-notification-modal/create-notification-modal";

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

      // this.platform.ready()
      //     .then(() => {
      //         console.log('ready then')
      //         this.localNotifications.on('click')
      //             .subscribe(notification => {
      //                 console.log('subsr')
      //                 let json = JSON.parse(notification.data);
      //
      //                 let alert = this.alertCtrl.create({
      //                     title: notification.title,
      //                     subTitle: json.mydata
      //                 });
      //                 alert.present();
      //             })
      //     })
  }

  createNotification() {
      this.platform.ready()
          .then(() => {
              let createNoteModal = this.modalCtrl.create(CreateNotificationModalPage);
              createNoteModal.present();
              createNoteModal.onDidDismiss((data: ILocalNotification) => {
                  // this.localNotifications.schedule({
                  //     id: data.id,
                  //     title: data.title,
                  //     text: data.text,
                  //     trigger: {at: data.trigger.at}
                  // });
                  this.localNotifications.schedule(data);
              });
          });


      // let createNoteModal = this.modalCtrl.create(CreateNotificationModalPage);
      // createNoteModal.present();
      // createNoteModal.onDidDismiss(data => {
      //   console.log(data)
      //     // if(data) {
      //     //   console.log('data in create')
      //         this.localNotifications.schedule({
      //             id: 1,
      //             title: 'Attention',
      //             text: 'Simons Notification'
      //         });
      //     // }
      // });
  }
}


// trigger: {at: new Date(new Date().getTime() + 5000)}
