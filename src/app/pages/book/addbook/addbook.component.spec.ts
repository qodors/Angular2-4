import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeService } from '../../_services/index';
import { AddbookComponent } from './addbook.component';

describe('AddbookComponent', () => {
  let component: AddbookComponent;
  let fixture: ComponentFixture<AddbookComponent>;
  let services: FakeService;
  let book;
  beforeEach(()=>{
    services = new FakeService;
    book = {
      id:1,
      user_id:1,
      name:'MMM',
      author:'MMM',
      price:1001,
      qty:2,
      cover:'Test cover'
    };
    
  })
  it('Add book check', () => {
    expect(true).toBeTruthy();
  });

  //Add Book
  it('should Add Book',()=>{
    let res = services.create(book);
    expect(res.name).toBe('MMM');
  })
});
