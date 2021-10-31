import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppSettings } from '../config/AppSettings';
import { AppSettingsService } from './app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  userLoggedInSource = new BehaviorSubject(false);
  userLoggedInObs = this.userLoggedInSource.asObservable();
  baseUrl :string="";

  
  constructor( private appSettingsService: AppSettingsService,private httpObj : HttpClient) { }


  ValidateUser(userName:string , password :string): Observable<boolean>{

    this.appSettingsService.getSettings().subscribe(
      m=> {
        this.baseUrl=m.baseApiUrl
      }
    );

    let body = new URLSearchParams();
    body.set('UserName', userName);
    body.set('Password', password);
    body.set('grant_type', 'password');

    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    this.httpObj
      .post<any>(this.baseUrl+'/token', body.toString(), options)
      .subscribe((m) => {
        console.log(m.access_token);
      });

      
    if(password =="admin"){
      this.userLoggedInSource.next(true);
      return of(true);
    }else{
      return of(false);
    }
  }

  logOut(): boolean{
    this.userLoggedInSource.next(false);
    return true;
  }

 


    
}
