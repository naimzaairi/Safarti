import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

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
}