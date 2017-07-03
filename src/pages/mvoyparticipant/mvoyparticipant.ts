import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import  { VoyageService } from '../../services/voyage-service';
import { MesVoyagesPage } from '../mesvoyages/mesvoyages';

@Component({
  selector: 'page-mvoyparticipant',
  templateUrl: 'mvoyparticipant.html'
})
export class MVoyParticipantPage {

  participation : any;

  constructor(public navCtrl: NavController,private voyage: VoyageService, private navParams: NavParams, public alertCtrl: AlertController) {
    let partId = navParams.get("participationId");
    this.voyage.infoParticipation(partId).subscribe(data=>{
      if(data instanceof Array){
        this.participation = data;
        console.log(this.participation);
      }else{
        this.showInformation(data);
      }
    },
    error =>{

    }
    );
  }

  public deleteParticipation(participation_id){
    console.log(participation_id);
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

