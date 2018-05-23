import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from "../../models/Note";
import {CreateNoteModalPage} from "../../pages/create-note-modal/create-note-modal";
import {NoteProvider} from "../../providers/note/note-provider";
import {ModalController} from "ionic-angular";

/**
 * Generated class for the ViewNoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'view-note',
  templateUrl: 'view-note.html'
})
export class ViewNoteComponent {
  @Input() note: Note = new Note();
  @Output() updateNotesEvent = new EventEmitter();

  constructor(private noteProvider: NoteProvider, private modalCtrl: ModalController) {
  }

  editNote(note: Note) {
      let editNoteModal = this.modalCtrl.create(CreateNoteModalPage, {note: note});
      editNoteModal.present();
      editNoteModal.onDidDismiss(data => {
          if(data) {
              this.noteProvider.editNote(data)
                  .then((res) => {
                      console.log(res);
                      this.updateNotesEvent.emit();
                  })
                  .catch(e => { 
                      console.log(e);
                  })
          }
      });
  }

  removeNote(note: Note) {
      this.noteProvider.removeNote(note.id)
          .then(() => {
              this.updateNotesEvent.emit();
          })
  }
}
