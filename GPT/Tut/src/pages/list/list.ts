import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @ViewChild('list') mapElement: ElementRef;
  list: any;
  data:string = '';

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  MapPage: MapPage;

  gotoMapPage() {
    this.navCtrl.setRoot(MapPage);
  }

}
