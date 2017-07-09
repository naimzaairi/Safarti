import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';

import { ResultsPage } from '../results/results';
import { CreateVoyagePage } from '../createvoyage/createvoyage';

import  { VoyageService } from '../../services/voyage-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//Variables
   myDate: String = new Date().toISOString();
  voyageInfo = {depart:"",destination:"", date:"", heure:""};
  constructor(public navCtrl: NavController, private voyage: VoyageService, public alertCtrl: AlertController, private navParams: NavParams) {
             console.log(this.voyageInfo);

  }

  public showResults(){
      console.log(this.voyageInfo);
      this.voyage.search(this.voyageInfo).subscribe(data=>{
      if(data instanceof Array){
        this.navCtrl.push(ResultsPage, {voyagesResult: data});
      }else{
        this.showInformation(data);
      }
    },
    error =>{

    }
    ); 
  }

  showCreateVoyage() : void{
    this.navCtrl.push(CreateVoyagePage);

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

