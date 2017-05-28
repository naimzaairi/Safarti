import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }

  showTabsPage(): void{
    this.navCtrl.push(TabsPage);
  }

}

