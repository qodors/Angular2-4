import { Injectable } from '@angular/core';
import { Http, Headers, Response,Jsonp } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient } from './http-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from 'environments/environment';

@Injectable()
export class AuthenticationService {
    device: String;
    constructor(private http: HttpClient,private ohttp:Http,private router: Router) {
        //console.log(this.ohttp.get('https://api.ipify.org').subscribe(data => { console.log(data);}));
        ohttp.get('https://api.ipify.org').subscribe(data => {
          this.device = data['_body'];
        });
    }
    
    login(username: string, password: string) {
        return this.http.post(environment.serverUrl+'user/login', { email: username, password: password, device_type: 'web', device_token:this.device })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.error_code == 0 && user.data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', user.data.token);
                    localStorage.setItem('User', JSON.stringify(user.data));
                }
                return user;
            })
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('User');
        this.router.navigate(['/']);
    }
}