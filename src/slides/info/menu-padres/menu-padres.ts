import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'menu-padres',
  templateUrl: 'menu-padres.html'
})
export class MenuPadresComponent {

  text: string;

  imagesMenuMini = ['1.jpg', '1.jpg', '1.jpg', '1.jpg'];
  imagesMenuBasico = ['1.jpg'];
  imagesMenuExtra = ['1.jpg', '1.jpg', '1.jpg', '1.jpg'];
  imagesMenuGourmet = ['1.jpg'];
  imagesMenuDeluxe = ['1.jpg', '1.jpg', '1.jpg', '1.jpg'];

  images = this.imagesMenuMini;

  constructor() {

  }

  changeSlides(slides: Slides) {
    switch (slides.getActiveIndex()) {
      case 0:
        this.images = this.imagesMenuMini;
        break;
      case 1:
        this.images = this.imagesMenuBasico;
        break;
      case 2:
        this.images = this.imagesMenuExtra;
        break;
      case 3:
        this.images = this.imagesMenuGourmet;
        break;
      case 4:
        this.images = this.imagesMenuDeluxe;
        break;
    }
  }

}
