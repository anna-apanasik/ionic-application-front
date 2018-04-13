import {Injectable} from "@angular/core";

@Injectable()
export class Notification {
    id: number;
    title: string;
    text: string;

    constructor(id = null, title = null, text = null) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}