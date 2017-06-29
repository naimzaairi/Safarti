import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import  { VoyageService } from '../../services/voyage-service';
import  { AuthService } from '../../services/auth-service';

import { MesVoyagesPage } from '../mesvoyages/mesvoyages';
@Component({
  selector: 'page-createvoyage',
  templateUrl: 'createvoyage.html'
})
export class CreateVoyagePage {

  createSuccess = false;
  voyageInfo = {user_id:0,depart:"",destination:"", date:"", heure:"", prix:""};

  constructor(public navCtrl: NavController,private auth: AuthService, private voyage: VoyageService, public alertCtrl: AlertController) {
       
  }

  public addVoyage(){
    let currUser = this.auth.getUserInfo();
    this.voyageInfo.user_id = currUser.id;
    this.voyage.add(this.voyageInfo).subscribe(msg=>{
        if(msg == "Voyage added successfully"){
          this.createSuccess = true;
          this.showMesVoyages("Success", "Voyage ajouté");
        }else{
          this.showMesVoyages("Error", "Verifier les données");
        }
    });
  }


  showMesVoyages(title, text): void{

   let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.setRoot(MesVoyagesPage);
            }
          }
        }
      ]
    });
    alert.present();
  }

}

