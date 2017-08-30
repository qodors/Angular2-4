import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from './http-client';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/catch';

// import { User } from '../_models/index';

@Injectable()
export class UserService {
    User: any={};
    device: any={};
    constructor(private http: HttpClient,private ohttp: Http) { 
        ohttp.get('https://api.ipify.org').subscribe(data => {
          this.device = data['_body'];
        });
    }

    getAll() {
        return this.http.get(environment.serverUrl+'user-profile').map((response: Response) => response.json());
    }

    //Dashboard
    dashboard(){
        return this.http.get(environment.serverUrl+'user/dashboard').map((response: Response)=>response.json());
    }

    //REGISTREATION
    create(user: any) {
        user['device_type'] = 'web';
        user['device_token'] = this.device;
        return this.http.post(environment.serverUrl+'user/register', user).map((response: Response) => response.json());
    }

    update(user: any) {
        return this.http.put('/api/users/' + user.id, user).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers:any;
        if (currentUser && currentUser.token) {
            headers = new Headers({ 'Authorization': currentUser.token });
        }else{
            let headers = new Headers({ 'Authorization': 'guest' });
        }
        return new RequestOptions({ headers: headers });
    }
}