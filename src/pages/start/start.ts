import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';


@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  startSegment: string = "login";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
      this.isAndroid = platform.is('android');
  }

}
