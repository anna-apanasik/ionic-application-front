import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  slides = [
      {
          title: "Welcome to the Docs!",
          description: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic."
      },
      {
          title: "What is Ionic?",
          description: "Ionic Framework is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript."
      },
      {
          title: "What is Ionic Cloud?",
          description: "The Ionic Cloud is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating."
      }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
