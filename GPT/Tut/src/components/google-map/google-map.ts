import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;
  constructor() {
    
  }

  ngOnInit(){
    this.initMap();
  }

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

}
