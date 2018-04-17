import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Geolocation, Geoposition} from "@ionic-native/geolocation";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat: number = 53.928519;
  lng: number = 27.625983;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private geolocation: Geolocation) {

  }

  ionViewDidEnter() {
      this.platform.ready()
          .then(() => {
              alert('ion');
              this.geolocation.getCurrentPosition()
                  .then((res: Geoposition) => {
                      alert(res.coords.latitude)
                      this.lat = res.coords.latitude;
                      this.lng = res.coords.longitude;
                  })
                  .catch( error => {
                      alert('error' + error)
                  })
          });
  }
}
