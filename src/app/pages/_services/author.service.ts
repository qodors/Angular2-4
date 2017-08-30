import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from './http-client';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthorService {
    author: any = {};
    constructor(private http: HttpClient) { }

    //Get My Authors
    getAll(isDatatable) {
        return this.http.get(environment.serverUrl + 'author/list/' + isDatatable).map((response: Response) => response.json());
    }

    //delete
    delete(id: number) {
        return this.http.delete(environment.serverUrl + 'author/delete/' + id).map((response: Response) => response.json());
    }

    //Addbook
    create(author: any) {
        return this.http.post(environment.serverUrl + 'author/add', author).map((response: Response) => response.json());
    }

    //Update
    update(author: any) {
        return this.http.post(environment.serverUrl+'author/update/', author).map((response: Response) => response.json());
    }

}
