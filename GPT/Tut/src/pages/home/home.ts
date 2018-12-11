import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public angularFireAuth: AngularFireAuth) {

  }

  register(email, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => 
    {
      this.navCtrl.setRoot(ListPage);
    });
  }

  login(email, password) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.navCtrl.setRoot(MapPage, (email));
    })
  }
}
