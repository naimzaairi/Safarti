import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class voyage{
    depart: string;
    destination: string;
    date: string;
    heure: string;
    prix: string;


    constructor(depart: string, destination: string, date: string, heure: string, prix: string, user_id: number){
        this.depart =  depart;
        this.destination = destination;
        this.date = date;
        this.heure = heure;
        this.prix = prix;

    }

}

@Injectable()
export class VoyageService{
    constructor(private http: Http) { }
    public add(voyageInfo){
        if(voyageInfo.depart == null || voyageInfo.user_id == 0){
            return Observable.throw("veuiller remplir tous les champs");
        }else{
            return Observable.create(observer=>{
                let url = "http://localhost:8000/voyage";
                let headers = new Headers({'Content-type':'application/json'});
                let options = new RequestOptions({headers: headers});

                this.http.post(url, voyageInfo, options)
                    .map(res => res.json())
                    .subscribe(data => {
                        observer.next(data);
                        observer.complete();
                    });
            });
        }
    }

    public voyagesPreparant(user_id){
        if(user_id == null || user_id == 0){
            return Observable.throw("Il n y a aucun voyage avec l'id de ce utilisateur");
        }else{
            return Observable.create(observer=>{
                let url = "http://localhost:8000/voyage/preparant/"+user_id;
                let headers = new Headers({'Content-type':'application/json'});
                let options = new RequestOptions({headers: headers});

                this.http.get(url, options)
                    .map(res => res.json())
                    .subscribe(data => {
                        observer.next(data);
                        observer.complete();
                    });
            });
        }
    }

    public voyagesParticipant(user_id){
        if(user_id == null || user_id == 0){
            return Observable.throw("Vous ne participez dans aucun voyage");
        }else{
            return Observable.create(observer=>{
                let url = "http://localhost:8000/voyage/participant/"+user_id;
                let headers = new Headers({'Content-type':'application/json'});
                let options = new RequestOptions({headers: headers});

                this.http.get(url, options)
                    .map(res => res.json())
                    .subscribe(data => {
                        observer.next(data);
                        observer.complete();
                    });
            });
        }
    }

    public infoVoyage(voyage_id){

        if(voyage_id == null || voyage_id == 0){
            return Observable.throw("Aucun voyage n'est selectionner");
        }else{
            return Observable.create(observer=>{
                console.log(voyage_id+"-----------");
                let url = "http://localhost:8000/voyage/"+voyage_id;
                let headers = new Headers({'Content-type':'application/json'});
                let options = new RequestOptions({headers: headers});

                this.http.get(url, options)
                    .map(res => res.json())
                    .subscribe(data => {
                        observer.next(data);
                        observer.complete();
                    });
            });
        }
    }

    public infoParticipation(participation_id){

        if(participation_id == null || participation_id == 0){
            return Observable.throw("Aucun voyage n'est selectionner");
        }else{
            return Observable.create(observer=>{
                let url = "http://localhost:8000/voyage/"+participation_id;
                let headers = new Headers({'Content-type':'application/json'});
                let options = new RequestOptions({headers: headers});

                this.http.get(url, options)
                    .map(res => res.json())
                    .subscribe(data => {
                        observer.next(data);
                        observer.complete();
                    });
            });
        }
    }

    public deleteParticipation(participation_id){
        if(participation_id == null || participation_id == 0){
            return Observable.throw("Aucun voyage n'est selectionner");
        }else{
            return Observable.create(observer=>{
                let url = "http://localhost:8000/participation/"+participation_id;
                let headers = new Headers({'Content-type':'application/json'});
                let options = new RequestOptions({headers: headers});

                this.http.delete(url, options)
                    .map(res => res.json())
                    .subscribe(data => {
                        observer.next(data);
                        observer.complete();
                    });
            });
        }
    }
}