import { Component } from '@angular/core';


@Component({
  selector: 'accueil',
  templateUrl: 'accueil.html'
})
export class Accueil {

  searchQuery: string = '';
  items: string[];

  constructor() {
   this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Arc de Triomphe',
      'Hôtel de Ville',
      'Tour Eiffel'
    ];
  }
    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
