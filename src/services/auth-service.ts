import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

export class User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  telephone: string;

  constructor( nom: string, prenom: string, email: string, password: string, telephone: string, id?: number) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
    this.password = password;
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private http: Http) { }
  public login(credentials) {

    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let signinUrl = "http://localhost:8000/user/signin";
        let cpheaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpheaders });

        this.http.post(signinUrl, credentials, options)
          .map(res => res.json())
          .subscribe(data => {
            if (data) {
              this.currentUser = new User(data.nom, data.prenom, data.email,
                data.password, data.telephone, data.id);
            } 
            observer.next(data);
            observer.complete();
            

          });
      });
    }
  }

  public register(credentials) {

    return Observable.create(observer => {
      let signupUrl = "http://localhost:8000/user/signup";
      let newUser = new User(credentials.nom, credentials.prenom, credentials.email,
        credentials.password, credentials.telephone);
      let cpheaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpheaders });

      this.http.post(signupUrl, newUser, options)
        .map(res => res.json())
        .subscribe(data => {
          observer.next(data);
          observer.complete();
        });
    });
  }


  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}