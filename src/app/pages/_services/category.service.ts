import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from './http-client';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {
    category: any = {};
    constructor(private http: HttpClient) { }

    //Get My Categorys
    getAll(isDatatable) {
        return this.http.get(environment.serverUrl + 'category/list/' + isDatatable).map((response: Response) => response.json());
    }

    //delete
    delete(id: number) {
        return this.http.delete(environment.serverUrl + 'category/delete/' + id).map((response: Response) => response.json());
    }

    //Addbook
    create(category: any) {
        return this.http.post(environment.serverUrl + 'category/add', category).map((response: Response) => response.json());
    }

    //Update
    update(category: any) {
        return this.http.post(environment.serverUrl+'category/update/', category).map((response: Response) => response.json());
    }

}
