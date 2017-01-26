import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { Accueil } from '../pages/accueil/accueil';
import { Adresses } from '../pages/adresses/adresses';
import { Favoris } from '../pages/favoris/favoris';
import { Balades } from '../pages/balades/balades';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = Accueil;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Accueil', component: Accueil, icon: "home" },
      { title: 'Mes Favoris', component: Favoris, icon: "heart" },
      { title: 'Mes Adresses', component: Adresses, icon: "bookmarks" },
      { title: 'Envie d\'une balade ?', component: Balades, icon: "walk" },
      { title: 'Hello Ionic', component: HelloIonicPage, icon: "home" },
      { title: 'My First List', component: ListPage, icon: "home" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
