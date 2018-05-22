import { Component } from '@angular/core';
import { User } from "../../models/User";
import { UserProvider } from "../../providers/user/user-provider";
import { AlertController, Platform } from "ionic-angular";
import { ErrorAlertMessageHelper } from "../../helpers/ErrorAlertMessageHelper";

@Component({
    selector: 'register-component',
    templateUrl: 'register.html'
})

export class RegisterComponent {

    protected user: User = new User();
    protected confirmPassword: string = '';
    protected isIos: boolean;
    protected isAndroid: boolean;

    constructor(private platform: Platform, private userProvider: UserProvider, private alertCtrl: AlertController, private errorAlert: ErrorAlertMessageHelper) {
        platform.ready().then(() => {
            this.isIos = platform.is('ios');
            this.isAndroid = platform.is('android');
        });
    }

    register() {
        this.userProvider.register(this.user)
            .then((user: User) => {
                    let alertSuccessRegistration = this.alertCtrl.create({
                        title: 'Success registration!',
                        message: user.firstName + ' , do you want to start right now?',
                        buttons: [
                            {
                                text: 'Let\'s go',
                                handler: () => {
                                    console.log('go')
                                }
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel'
                            }
                        ]
                    });
                    alertSuccessRegistration.present();
                },
                (errorResponse) => {
                    let messages = errorResponse.errors.map(item => `<li>${item.path.substr(1, item.path.length - 2)}: ${item.message}</li>`);
                    this.errorAlert.errorAlertMessageFromErrorResponse(errorResponse,null,`<ul>${messages.join('')}</ul>`)
                })
    }

    isValidConfirmPassword() {
        return this.user.password && this.confirmPassword
            ? this.user.password === this.confirmPassword
            : false;
    }
}
