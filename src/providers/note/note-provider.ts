import { Injectable } from '@angular/core';
import {Note} from "../../models/Note";

@Injectable()
export class NoteProvider {

  private notes: Note[] = [];

  constructor() {
  }

  addNote(note: Note): void {
    this.notes.unshift(note);
  }

  editNote(note: Note): void {
      let index = this.notes.indexOf(note);
      this.notes[index] = note;
  }

  removeNote(note: Note): void {
    let index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  search(text: string): Note[] {
    return this.notes.filter( item => ~item.title.toLowerCase().indexOf(text) || ~item.text.toLowerCase().indexOf(text));
  }
}
