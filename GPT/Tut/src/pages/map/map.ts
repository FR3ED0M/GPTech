import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ListPage } from '../list/list';


@IonicPage()
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
  
  ngOnInit(){
    this.initMap();
  }
  
  initMap(){
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    let coords = new google.maps.LatLng(26.369259,-80.095845);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker_1 = new google.maps.Marker(
      {
        position: {lat:26.378042, lng:-80.097306}, 
        map: this.map,
        title: 'Ranger Station',
        icon: image
      })
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

  SOS(){
    let coords = new google.maps.LatLng(26.373543,-80.101061);
    
    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })
  }
}