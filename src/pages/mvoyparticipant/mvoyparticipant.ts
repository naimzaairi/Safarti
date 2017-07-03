import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import  { VoyageService } from '../../services/voyage-service';

@Component({
  selector: 'page-mvoyparticipant',
  templateUrl: 'mvoyparticipant.html'
})
export class MVoyParticipantPage {

  pariticipation : any;
  constructor(public navCtrl: NavController,private voyage: VoyageService, private navParams: NavParams, public alertCtrl: AlertController) {
    let partId = navParams.get("participationId");
    this.voyage.infoParticipation(partId).subscribe(data=>{
      if(data){
        this.pariticipation = data;
        console.log(this.pariticipation);
      }else{

      }
    },
    error =>{

    }
    );
  }



}

