import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Geolocation, Geoposition} from "@ionic-native/geolocation";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat: number = 53.9000000;
  lng: number = 27.5666700;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private geolocation: Geolocation) {

  }

  ionViewDidEnter() {
      this.platform.ready()
          .then(() => {
              let options = {
                  timeout: 5000,
                  enableHighAccuracy: true
              };

              this.geolocation.getCurrentPosition(options)
                  .then((res: Geoposition) => {
                      this.lat = res.coords.latitude;
                      this.lng = res.coords.longitude;
                  })
                  .catch( error => {
                      alert(error.message)
                  })
          });
  }
}
