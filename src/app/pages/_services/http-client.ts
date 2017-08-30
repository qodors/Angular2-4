import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpClient {
  token: any={};
  constructor(private http: Http,private router: Router) {}

  createAuthorizationHeader(headers: Headers) {
    this.token  = localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : 'guest';
    headers.append('Authorization', this.token); 
  }

  unauthorised(e:any){
    if(e.status === 401){
      // console.log(e);
        localStorage.removeItem('currentUser');
        // Token Expired so redirect to login page with the return url
        this.router.navigate(['/login']);
        return "Unaothorized";
    }
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).catch(e => {
        return this.unauthorised(e);
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    }).catch(e => {
        return this.unauthorised(e);
    });
  }

  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    }).catch(e => {
        return this.unauthorised(e);
    });
  }

  delete(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    }).catch(e => {
        return this.unauthorised(e);
    });
  }
}