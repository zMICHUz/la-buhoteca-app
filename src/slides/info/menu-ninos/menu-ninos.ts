import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'menu-ninos',
  templateUrl: 'menu-ninos.html'
})
export class MenuNinosComponent {

  imagesMenu1 = ['1.jpg', '1.jpg', '1.jpg', '1.jpg'];
  imagesMenu2 = ['1.jpg'];

  images = this.imagesMenu1;

  constructor() {
  }

  changeSlides(slides: Slides) {
    switch (slides.getActiveIndex()) {
      case 0:
        this.images = this.imagesMenu1;
        break;
      case 1:
        this.images = this.imagesMenu2;
        break;
    }
  }

}
