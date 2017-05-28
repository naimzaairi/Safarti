import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    console.log("Coucou !")
  }

  showResults() : void{
      this.navCtrl.push(ResultsPage);
 
  }



}

