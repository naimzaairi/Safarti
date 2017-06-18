import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { FirstPage } from '../first/first';

@Component({
  selector: 'page-safarti',
  templateUrl: 'safarti.html'
})
export class SafartiPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  items = [
    "C'est quoi Safarti ?",
    'Déconnexion',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    
    switch(item){
      case 'Déconnexion':
        this.navCtrl.push(FirstPage);
        break;

      case "C'est quoi Safarti ?":
        console.log("Salut toi");
        break;

    }
  }

}
