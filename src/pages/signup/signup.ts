import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

 showTabsPage(): void{

   let confirm = this.alertCtrl.create({
      title: 'Bienvenue !',
      message: 'Votre compte est désormais crée. Un mail vous a été envoyé.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(TabsPage);
          }
        }
      ]
    });
    confirm.present();

  }


}

