import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import  { VoyageService } from '../../services/voyage-service';
import { MesVoyagesPage } from '../mesvoyages/mesvoyages';

@Component({
  selector: 'page-mvoypreparant',
  templateUrl: 'mvoypreparant.html'
})
export class MVoyPreparantPage {

  voyageInfo: any;

  constructor(public navCtrl: NavController,private voyage: VoyageService, private navParams: NavParams, public alertCtrl: AlertController) {
    let voyageId = navParams.get("voyageId");
    this.voyage.infoVoyage(voyageId).subscribe(data=>{
      if(data){
        this.voyageInfo = data;
        console.log(this.voyageInfo);
      }else{
        this.showInformation(data);
      }
    },
    error =>{

    }
    );
  }

  deleteParticipation(participation_id){
    this.voyage.deleteParticipation(participation_id).subscribe(data=>{
      if(data){
        this.showInformation(data);
      }
    });
    this.navCtrl.setRoot(MesVoyagesPage);
  }

   showInformation(text) {
    let alert = this.alertCtrl.create({
      title: 'Erreur',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }



}

