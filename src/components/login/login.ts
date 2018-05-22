import { Component } from '@angular/core';
import { NavController, Platform } from "ionic-angular";
import { UserProvider } from "../../providers/user/user-provider";
import { TabsPage } from "../../pages/tabs/tabs";
import { ErrorResponse } from "../../models/ErrorResponse";
import { ErrorAlertMessageHelper } from "../../helpers/ErrorAlertMessageHelper";

@Component({
  selector: 'login-component',
  templateUrl: 'login.html'
})

export class LoginComponent {

  protected email: string;
  protected password: string;
  protected isIos: boolean;
  protected isAndroid: boolean;

  constructor(private navCtrl: NavController, private platform: Platform, private errorAlert: ErrorAlertMessageHelper, private userProvider: UserProvider) {
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
              this.errorAlert.errorAlertMessageFromErrorResponse(e, null, e.message ? 'Wrong email or password' : '')
          })
  }
}
