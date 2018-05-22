import {Injectable} from "@angular/core";

@Injectable()
export class Note {
    id: string;
    title: string;
    text: string;
    author: string;

    constructor({id = null, title = null, text = null} = {}) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}