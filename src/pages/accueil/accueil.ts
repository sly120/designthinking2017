import { Component, ElementRef, ViewChild } from '@angular/core';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'accueil',
  templateUrl: 'accueil.html'
})
export class Accueil {
	@ViewChild('map') mapElement: ElementRef;
	@ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
	constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations) {
 
  }
 
	ionViewDidLoad(){
 
    this.platform.ready().then(() => {
 
        let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
 
    });
 
  }
  
  searchQuery: string = '';
  items: string[];



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
