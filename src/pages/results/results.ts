import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ResearchDetailPage } from '../researchdetail/researchdetail';


@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    console.log("Coucou !")
  }

  showResearchDetail() {

    this.navCtrl.push(ResearchDetailPage);

  }

  



}

