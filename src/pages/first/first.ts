import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})
export class FirstPage {

  constructor(public navCtrl: NavController) {

  }

  showSignupPage(): void{
    this.navCtrl.push(SignupPage);
  }
  showSigninPage(): void{
    this.navCtrl.push(SigninPage);
  }


}

