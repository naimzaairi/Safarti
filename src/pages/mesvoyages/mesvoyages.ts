import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MVoyPreparantPage } from '../mvoypreparant/mvoypreparant';
import { MVoyParticipantPage } from '../mvoyparticipant/mvoyparticipant';

@Component({
  selector: 'page-mesvoyages',
  templateUrl: 'mesvoyages.html'
})
export class MesVoyagesPage {

  constructor(public navCtrl: NavController) {

  }

  showVoyPrepDetail() {
    this.navCtrl.push(MVoyPreparantPage);

  }

    showVoyPartDetail() {
    this.navCtrl.push(MVoyParticipantPage);

  }

}
