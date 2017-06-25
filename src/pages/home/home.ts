import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ResultsPage } from '../results/results';
import { CreateVoyagePage } from '../createvoyage/createvoyage';

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

showCreateVoyage() : void{
  this.navCtrl.push(CreateVoyagePage);

}

}

