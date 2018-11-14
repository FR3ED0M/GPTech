import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

    lat: any;
    lng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

ionicViewDidLoad() {
this.geo.getCurrentPosition().then( pos=> {
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
}).catch( err => console.log(err));
}

}
