import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { BookingPage } from '../pages/booking/booking';
import { InfoPage } from '../pages/info/info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccordionModule } from 'primeng/primeng';
import { MenuNinosComponent } from '../slides/info/menu-ninos/menu-ninos';
import { DecoGlobosComponent } from '../slides/info/deco-globos/deco-globos';
import { MenuPadresComponent } from '../slides/info/menu-padres/menu-padres';
import { PersonajesComponent } from '../slides/info/personajes/personajes';
import { PinataComponent } from '../slides/info/pinata/pinata';
import { MesasDulcesComponent } from '../slides/info/mesas-dulces/mesas-dulces';

@NgModule({
  declarations: [
    MyApp,
    BookingPage,
    InfoPage,
    MenuNinosComponent,
    DecoGlobosComponent,
    MenuPadresComponent,
    PersonajesComponent,
    PinataComponent,
    MesasDulcesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AccordionModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookingPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
