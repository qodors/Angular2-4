import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from './http-client';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/catch';

// import { User } from '../_models/index';

@Injectable()
export class BookService {
    book: any={};
    device: any={};
    constructor(private http: HttpClient) {}

    //Rate Books 
    rateIt(book: any){
        return this.http.post(environment.serverUrl+'book/rate',book).map((response: Response) => response.json());
    }
    //List Available Books
    getAll() {
        return this.http.post(environment.serverUrl+'book/list',{}).map((response: Response) => response.json());
    }
    //List My Available Books
    getMyAll() {
        return this.http.post(environment.serverUrl+'book/mylist',{}).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id).map((response: Response) => response.json());
    }

    //Addbook
    create(book: any) {
        return this.http.post(environment.serverUrl+'book/add', book).map((response: Response) => response.json());
    }

    update(book: any) {
        return this.http.post(environment.serverUrl+'book/update/', book).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(environment.serverUrl+'book/delete/' + id).map((response: Response) => response.json());
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