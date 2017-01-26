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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
