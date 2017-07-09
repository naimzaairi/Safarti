import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import  { VoyageService } from '../../services/voyage-service';
import { AuthService } from '../../services/auth-service'


@Component({
  selector: 'page-researchdetail',
  templateUrl: 'researchdetail.html'
})
export class ResearchDetailPage {

  voyageInfo: any;
  currUser;

  constructor(public navCtrl: NavController, private auth: AuthService, private voyage: VoyageService, private navParams: NavParams, public alertCtrl: AlertController) {
    let voyageId = navParams.get("voyageId");
    this.currUser = this.auth.getUserInfo();;
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

  participer(voyage_id){

    let participationInfo = {voyage_id: voyage_id, user_id: this.currUser };
     this.voyage.addParticipation(participationInfo).subscribe(data=>{
      if(data){
        this.showInformation(data);
      }else{
        this.showInformation(data);
      }
    },
    error =>{

    }
    );

  }

   showInformation(text) {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }



  



}

