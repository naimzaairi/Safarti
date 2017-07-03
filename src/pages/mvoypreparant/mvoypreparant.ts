import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mvoypreparant',
  templateUrl: 'mvoypreparant.html'
})
export class MVoyPreparantPage {

  constructor(public navCtrl: NavController, private navParams: NavParams, public alertCtrl: AlertController) {
    console.log(navParams.get("voyageId"));
  }



}

