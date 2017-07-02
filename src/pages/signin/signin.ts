import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../services/auth-service';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  loading: Loading;
  loginCredentials = {email: "", password:""};

  constructor(private navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  //A SUPPRIMER QUAND MODIFICATION EST TERMINE
  showHome() {
    this.navCtrl.push(HomePage);
  }


  public login(){
    this.showLoading();
    this.auth.login(this.loginCredentials).subscribe(data=>{
      if(data == "No user was found"){
        this.showError("Verifier vos identifiants");
      }else{
         this.navCtrl.setRoot(HomePage);
      }
    },
    error =>{
      this.showError(error);
    }
    );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Connexion...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Erreur d\'authentification',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
  showTabsPage(): void{
    this.navCtrl.push(TabsPage);
  }

}

