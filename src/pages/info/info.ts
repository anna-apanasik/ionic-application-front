import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {GalleryModal} from "ionic-gallery-modal";

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

    lat: number = 53.928519;
    lng: number = 27.625983;

  slides = [
      {
          title: "Welcome to the Docs!",
          description: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
          button: "Show images"
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

  private images: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
      for (let i = 1; i < 5; i++) {
          this.images.push({
              url: `assets/imgs/${i}.jpg`
          });
      }
  }

  showImages() {
      let imageModal = this.modalCtrl.create(GalleryModal, {
          photos: this.images,
          initialSlide: 0,
          closeIcon: 'arrow-back'
      });

      imageModal.present();
  }

}
