import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

import  { VoyageService } from '../../services/voyage-service';
import { AuthService } from '../../services/auth-service';
import { MVoyPreparantPage } from '../mvoypreparant/mvoypreparant';
import { MVoyParticipantPage } from '../mvoyparticipant/mvoyparticipant';

@Component({
  selector: 'page-mesvoyages',
  templateUrl: 'mesvoyages.html'
})
export class MesVoyagesPage {

  voyagesPreparant: any;
  voyagesParticipant: any;
  voyageId;
  participationId;

  constructor(private navCtrl: NavController, private auth: AuthService, private voyage: VoyageService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
      let currUser = this.auth.getUserInfo();
      this.voyage.voyagesPreparant(currUser.id).subscribe(data=>{
        if(data){
          this.voyagesPreparant = data;
        }else{

        }
      },
      error =>{
        this.showError(error);
      }
      );

      this.voyage.voyagesParticipant(currUser.id).subscribe(data=>{
        if(data){
          this.voyagesParticipant = data;
        }else{

        }
      },
      error =>{
        this.showError(error);
      }
      );

  }


  showVoyPrepDetail(voyageId) {
    this.navCtrl.push(MVoyPreparantPage, {voyageId: voyageId});

  }

    showVoyPartDetail(participationId) {
    this.navCtrl.push(MVoyParticipantPage, {participationId: participationId});

  }

    showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Erreur d\'authentification',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
