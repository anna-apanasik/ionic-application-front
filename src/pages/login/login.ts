import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  protected userName: string;
  protected paswword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  login() {
    let successLoginAlert = this.alertCtrl.create({
        title: 'Hi! ' + this.userName,
        subTitle: 'Let\'s go!',
        buttons: [{
            text: 'Go Go Go',
            role: 'OK',
            handler: () => {
              this.navCtrl.push(TabsPage);
            }
        }]
    });

    successLoginAlert.present();
  }

}
