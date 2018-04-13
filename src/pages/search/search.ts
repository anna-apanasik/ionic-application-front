import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note-provider";
import {Note} from "../../models/Note";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  protected searchValue: string;
  protected searchedNotes: Note[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private noteProvider: NoteProvider) {
  }

  onInput() {
    if(this.searchValue) {
        this.searchedNotes = this.noteProvider.search(this.searchValue);
    }
  }

  onCancel() {
    this.searchedNotes = [];
  }
}
