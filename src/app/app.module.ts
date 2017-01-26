import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Accueil } from '../pages/accueil/accueil';
import { Adresses } from '../pages/adresses/adresses';
import { Favoris } from '../pages/favoris/favoris';
import { Balades } from '../pages/balades/balades';
import { Locations } from '../providers/locations';
import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';

@NgModule({
  declarations: [
    MyApp,
    Accueil,
    Favoris,
    Adresses,
    Balades,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Accueil,
    Favoris,
    Adresses,
    Balades,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Locations, GoogleMaps, Connectivity]
})
export class AppModule {}