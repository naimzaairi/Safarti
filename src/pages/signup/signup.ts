import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import  {AuthService } from '../../services/auth-service';

import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  createSuccess = false;
  registerCredentials = {nom:'', prenom:'', email: '', password: '', telephone:'' };

  constructor(private navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
  
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success == "User Added Successfully") {
        this.createSuccess = true;
        this.showSigninPage("Success", "Votre compte est désormais crée.");
      } else {
        console.log(success);
        this.showSigninPage("Error", "Verifier vos données");
      }
    },
      error => {
        this.showSigninPage("Error", error);
      });
  }

  showSigninPage(title, text): void{

   let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.setRoot(SigninPage);
            }
          }
        }
      ]
    });
    alert.present();
  }


}

