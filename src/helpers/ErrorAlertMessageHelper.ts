import {Injectable} from "@angular/core";
import { AlertController } from "ionic-angular";
import { ErrorResponse } from "../models/ErrorResponse";

@Injectable()
export class ErrorAlertMessageHelper {
    constructor(private alertCtrl: AlertController) {}

    errorAlertMessageFromErrorResponse(errorResponse: ErrorResponse, subTitle: string ='Something went wrong', message?: string) {
        let alertErrorMessage = this.alertCtrl.create({
            title: 'Ooops!',
            subTitle: errorResponse.message || subTitle,
            message: message,
            buttons: [ 'Dismiss']
        });
        alertErrorMessage.present();
    }
}