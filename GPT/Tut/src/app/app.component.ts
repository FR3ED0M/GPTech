import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { rootRenderNodes } from '@angular/core/src/view';
import { OnInit } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HelpPage } from '../pages/help/help';
import { MapPage } from '../pages/map/map';
import { NgOnChangesFeature } from '@angular/core/src/render3/definition';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Edit Info', component: ListPage },
      { title: 'Info', component: HelpPage },
      { title: 'Map', component: MapPage },
      { title: 'Logout', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

