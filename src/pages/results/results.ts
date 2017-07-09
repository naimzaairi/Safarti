import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';

import { ResearchDetailPage } from '../researchdetail/researchdetail';


@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  voyages: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private navParams: NavParams) {
  
   this.voyages = navParams.get("voyagesResult");

  }

  showResearchDetail(voyageId) {
    this.navCtrl.push(ResearchDetailPage, {voyageId: voyageId});
  }

  



}

