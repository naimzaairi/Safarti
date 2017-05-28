import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    console.log("Coucou !")
  }

  



}

