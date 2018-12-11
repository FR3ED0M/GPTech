import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  lat:string = '';
  lng:string = '';
  constructor(public navCtrl: NavController,  private geolocation: Geolocation) { }
  
  
  
  initMap(){

    let coords = new google.maps.LatLng(25.7614036,-80.7751465);
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })

    let marker_1 = new google.maps.Marker(
      {
        position: {lat:26.037161, lng:-80.981494}, 
        map: this.map,
        title: 'someone',
        icon: image
      }
    )
    
  }

  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    this.lat = 'Lat: ' + resp.coords.latitude,
    this.lng = 'Lng: ' + resp.coords.longitude}).catch((error) => {
    console.log('Error getting location', error);
    }); 
  }

  profile(){
    this.navCtrl.setRoot(ListPage);
  }
 
}