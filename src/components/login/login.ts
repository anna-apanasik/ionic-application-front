import { Component } from '@angular/core';
import { AlertController, NavController, Platform } from "ionic-angular";
import { UserProvider } from "../../providers/user/user-provider";
import { TabsPage } from "../../pages/tabs/tabs";
import { ErrorResponse } from "../../models/ErrorResponse";

@Component({
  selector: 'login-component',
  templateUrl: 'login.html'
})

export class LoginComponent {

  protected email: string;
  protected password: string;
  protected isIos: boolean;
  protected isAndroid: boolean;

  constructor(private navCtrl: NavController, private platform: Platform, private alertCtrl: AlertController, private userProvider: UserProvider) {
      platform.ready().then(() => {
          this.isIos = platform.is('ios');
          this.isAndroid = platform.is('android');
      });
  }

  login() {
      this.userProvider.login(this.email, this.password)
          .then(() => {
              this.navCtrl.push(TabsPage);
          })
          .catch( (e: ErrorResponse) => {
              let alertErrorMessage = this.alertCtrl.create({
                  title: 'Ooops!',
                  subTitle: e.message || 'Something went wrong',
                  message: e.message ? 'Wrong email or password' : '',
                  buttons: [ 'Dismiss']
              });
              alertErrorMessage.present();
          })
  }
}
