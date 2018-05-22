import { Injectable } from '@angular/core';
import { Note } from "../../models/Note";
import { CoreProvider } from "../core/core-provider";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NoteProvider extends CoreProvider {

  private notes: Note[] = [];

  constructor(public http: HttpClient) {
     super(http);
  }

  addNote(note: Note) {
    return this.postRequest('/notes/add-note', note, Note);
  }

  editNote(note: Note): void {
      let index = this.notes.indexOf(note);
      this.notes[index] = note;
  }

  removeNote(note: Note): void {
    let index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

  getAllNotes() {
    return this.getRequest('/notes', Note);
  }

  search(text: string): Note[] {
    return this.notes.filter( item => ~item.title.toLowerCase().indexOf(text) || ~item.text.toLowerCase().indexOf(text));
  }
}
