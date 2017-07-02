import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { BookingPage } from '../booking/booking';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage implements AfterViewInit {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  goToBooking(event, item) {
    this.navCtrl.setRoot(BookingPage);
  }

  goToNextSlide() {
    if (this.slides.getActiveIndex() < 5)
      this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  goToPrevSlide() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }
}
