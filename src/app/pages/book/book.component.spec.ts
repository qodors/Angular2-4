import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeService } from '../_services/index';
import { BookComponent } from './book.component';

describe('BookComponent',() => {
    let service : FakeService;
    let book;
    beforeEach(()=>{
        service = new FakeService();
        book = {
            id:1,
            name:'Changed name',
            author:'Changed author',
            price:1001,
            qty:3,
            cover:'Changed cover'
        };
    })
    it('BookComponent works',()=>{
        expect(true).toBeTruthy();
    });

    //Edit Book
    it('Should Update Book to changed',()=>{
        let res = service.update(book);
        expect(res.name).toBe(book.name);
    })

    //Get All
    it('should get all Books',()=>{
        let res = service.getAll();
        expect(res[0].name).toBe('AAA');
    })
})