import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeService } from '../../_services/index';
import { AllBooksComponent } from './allbooks.component';

describe('AllbookComponent', () => {
  let component: AllBooksComponent;
  let fixture: ComponentFixture<AllBooksComponent>;
  let service: FakeService;
  let book;
  beforeEach(()=>{
    service = new FakeService();
    book = [
      {
          id:1,
          name:'AAA',
          author:'AAA',
          price:1000,
          qty:2
      },
      {
          id:2,
          name:'BBB',
          author:'BBB',
          price:1300,
          qty:3
      },
      {
          id:3,
          name:'CCC',
          author:'CCC',
          price:1050,
          qty:2
      }
  ];
  })

  it('AllBookComponent', () => {
    expect(true).toBeTruthy();
  });

  //Rate Book
  it('Should Rate a Book',()=>{
    let r = service.rateit(book[1],3);
    expect(r['rate']).toBe(3);
  })
});
