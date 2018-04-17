import {Injectable} from "@angular/core";
import {ILocalNotification} from "@ionic-native/local-notifications";

@Injectable()
export class Notification implements ILocalNotification {
    id: number;
    title: string;
    text: string;
    time: string;
    date: string;
    message: string;
    trigger: { at: Date };

    constructor() {
        this.id =  Math.round(Math.random() * 10000);
        this.date = new Date().toISOString();
        this.time = new Date().toISOString();
    }

     static prepare(notification: Notification) {
        notification.trigger= { at: new Date(new Date(notification.time).getTime()) };
        return notification;

    }
}