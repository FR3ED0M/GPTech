import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';




@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  data:string = '';
  constructor(public navCtrl: NavController,  private geolocation: Geolocation) { }
  
  
  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    this.data = 'Lat: ' + resp.coords.latitude + ' <br>' + 'Lng: ' + resp.coords.longitude
    }).catch((error) => {
    console.log('Error getting location', error);
    });
  }
  
 
}