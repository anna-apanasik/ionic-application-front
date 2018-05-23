import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  startSegment: string = "login";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
