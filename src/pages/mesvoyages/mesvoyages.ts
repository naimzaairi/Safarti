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
  messageParticipant;
  messagePreparant;
  currUser;
  constructor(private navCtrl: NavController, private auth: AuthService, private voyage: VoyageService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {      
    this.currUser = this.auth.getUserInfo();;
  }

    loadMesVoyages(){
      
      this.voyage.voyagesPreparant(this.currUser.id).subscribe(data=>{
        if(data instanceof Array){
          this.voyagesPreparant = data;
          this.messagePreparant = null;
        }else{
          this.messagePreparant = data;
        }
      },
      error =>{
        this.showError(error);
      }
      );

    }

    loadMesParticipations(){
        this.voyage.voyagesParticipant(this.currUser.id).subscribe(data=>{
        if(data instanceof Array){
          this.voyagesParticipant = data;
          this.messageParticipant = null;
        }else{
          this.messageParticipant = data;
        }
      },
      error =>{
        this.showError(error);
      }
      );
    }

    showVoyPrepDetail(voyageId) {
      console.log(voyageId);
    this.navCtrl.push(MVoyPreparantPage, {voyageId: voyageId});

  }

    showVoyPartDetail(participationId) {
    this.navCtrl.push(MVoyParticipantPage, {participationId: participationId});

  }

    showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Erreur',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
