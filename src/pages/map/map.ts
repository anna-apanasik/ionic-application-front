import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat: number = 53.928519;
  lng: number = 27.625983;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
