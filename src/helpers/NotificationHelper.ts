import {Injectable} from "@angular/core";
import {ILocalNotification} from "@ionic-native/local-notifications";
import {Notification} from "../models/Notification";

@Injectable()
export class NotificationHelper {
    static convertNotificationToILocalNotification(notification: Notification): ILocalNotification  {
        let iLocalNotification: ILocalNotification;
        iLocalNotification = {
            id: Math.round(Math.random() * 10000),
            title: notification.title,
            text: notification.text,
            trigger: {
                at: new Date(new Date(notification.time).getTime())
            }
        };

        return iLocalNotification;
    }
}