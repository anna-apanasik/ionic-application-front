import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {CreateNoteModalPage} from "../create-note-modal/create-note-modal";
import {NoteProvider} from "../../providers/note/note-provider";
import {Note} from "../../models/Note";

@Component({
  selector: 'page-note',
  templateUrl: 'note-container.html'
})

export class NoteContainerPage {

  protected notes: Note[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private noteProvider: NoteProvider) {
  }

  ionViewDidLoad() {
    this.updateNotes();
  }

  createNote() {
    let createNoteModal = this.modalCtrl.create(CreateNoteModalPage);
    createNoteModal.present();
    createNoteModal.onDidDismiss(data => {
      if(data) {
          this.noteProvider.addNote(data);
          this.updateNotes();
      }
    });
  }

  updateNotes() {
    this.notes = this.noteProvider.getAllNotes();
  }
}
