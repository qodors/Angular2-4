import { Http, Headers, Response,Jsonp } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient } from './http-client';
import {environment} from 'environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeService{
    user = new User();
    books;authors;
    login(username: string, password: string) {
        if(username == 'test' && password == 'test'){
            return true;
        }else{
            return false;
        }
    }

    //Rate a Book
    rateit(book,r){
        book['rate'] = r;
        return book;
    }

    //Add Book
    create(d){
        let b = new Book();
        b.Book(d.id,d.user_id,d.name,d.author,d.price,d.qty,d.cover);
        return b;
    }

    //Edit Book
    update(book: any) {
        let tobeChange = new Book();
        tobeChange.Book(1,1,'AAA','AAA',1000,2,'cover');
        tobeChange.BookData(book);
        return tobeChange;
    }
    //Edit Author
    updateAuthor(author: any) {
        let tobeChange = new Author();
        tobeChange.Author(author);
        return tobeChange;
    }
    //List All Book
    getAll() {
        this.books = [
            {id:1,user_id:1,name:'AAA',auther:'AAA',price:1000,qty:1,cover:'test1'},
            {id:2,user_id:2,name:'BBB',auther:'BBB',price:1001,qty:2,cover:'test2'}
        ];
        return this.books;
    }
    //List All Author
    getAllAuthor() {
        this.authors = [
            {id:1,name:'AAA',city:'AAA',about:'AAA'},
            {id:2,name:'BBB',city:'BBB',about:'BBB'},
        ];
        return this.authors;
    }
    //Edit Category
    updateCategory(author: any) {
        let tobeChange = new Category();
        tobeChange.Category(author);
        return tobeChange;
    }
    //List All Category
    getAllCategory() {
        this.authors = [
            {id:1,name:'AAA'},
            {id:2,name:'BBB'},
        ];
        return this.authors;
    }
}
class Category{
    id:number = 1;
    name:string = 'Category name';
    public Category(category){
        this.id = category.id;
        this.name = category.name;
    }
}
class Author{
    id:number = 1;
    name:string = 'Author name';
    city:string = 'Author city';
    about:string = 'Author Detail';
    public Author(author){
        this.id = author.id;
        this.name = author.name;
        this.city = author.city;
        this.about = author.about;
    }
}
class User{
    id:number = 1;
    first_name:string = 'test_Fname';
    last_name:string = 'test_Lname';
    username:string = 'test_uname';
    email:string = 'test';
    password:string = 'test';
}
class Book{
    public id:number;
    public user_id:number;
    public name:string;
    public auther:string;
    public price:number;
    public qty:number;
    public cover:string;

    public Book(id,user_id,name,author,price,qty,cover){
        this.id = id;
        this.user_id = user_id;
        this.name = name;
        this.auther = author;
        this.price = price;
        this.qty = qty;
        this.cover = cover;
    }
    public BookData(data){
        this.id = data.id;
        this.user_id = data.user_id;
        this.name = data.name;
        this.auther = data.author;
        this.price = data.price;
        this.qty = data.qty;
        this.cover = data.cover;
    }
}
  