import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapPage } from '../map/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Users } from '../../models/users.models';
import { AngularFireAuth } from 'angularfire2/auth';

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

  //DB
  user = {} as Users;
  //DB end 

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseDB: AngularFireDatabase, private angularFireAuth: AngularFireAuth ) { }

  btnUpdate(){
    this.angularFireAuth.authState.take(1).subscribe(auth => {
      this.firebaseDB.object(`Users/${auth.uid}`).set(this.user);
    })
  }

  MapPage: MapPage;

  gotoMapPage() {
    this.navCtrl.setRoot(MapPage);
  }

}
