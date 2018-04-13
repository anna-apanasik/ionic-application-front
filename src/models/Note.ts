import {Injectable} from "@angular/core";

@Injectable()
export class Note {
    title: string;
    text: string;

    constructor(title = null, text = null) {
        this.title = title;
        this.text = text;
    }
}