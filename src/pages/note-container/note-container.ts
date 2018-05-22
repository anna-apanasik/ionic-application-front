import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CreateNoteModalPage } from "../create-note-modal/create-note-modal";
import { NoteProvider } from "../../providers/note/note-provider";
import { Note } from "../../models/Note";
import { ErrorResponse } from "../../models/ErrorResponse";
import { ErrorAlertMessageHelper } from "../../helpers/ErrorAlertMessageHelper";

@Component({
    selector: 'page-note',
    templateUrl: 'note-container.html'
})

export class NoteContainerPage {

    protected notes: Note[];

    constructor(private modalCtrl: ModalController, private noteProvider: NoteProvider, private errorAlert: ErrorAlertMessageHelper) {
    }

    ionViewDidLoad() {
        this.updateNotes();
    }

    createNote() {
        let createNoteModal = this.modalCtrl.create(CreateNoteModalPage);
        createNoteModal.present();
        createNoteModal.onDidDismiss(data => {
            if (data) {
                this.noteProvider.addNote(data)
                    .then(() => {
                        this.updateNotes();
                    })
                    .catch((e: ErrorResponse) => {
                        this.errorAlert.errorAlertMessageFromErrorResponse(e);
                    })
            }
        });
    }

    updateNotes() {
        this.noteProvider.getAllNotes()
            .then((notes: Note[]) => {
                this.notes = notes.reverse();
            })
            .catch((e: ErrorResponse) => {
                this.errorAlert.errorAlertMessageFromErrorResponse(e);
            })
    }
}
