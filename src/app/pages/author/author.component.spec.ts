import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeService } from '../_services/fakeService';
import { AuthorComponent } from './author.component';

describe('AuthorComponent', () => {
  let service : FakeService;
  let author;
  beforeEach(()=>{
      service = new FakeService();
      author = {
          id:1,
          name:'Changed name',
          city:'Changed City',
          about:'Changed About'
      };
  })
  it('AuthorComponent works',()=>{
      expect(true).toBeTruthy();
  });

  //Edit Author
  it('Should Update Author to changed',()=>{
      let res = service.updateAuthor(author);
      expect(res.name).toBe(author.name);
  })

  //Get All
  it('should get all Books',()=>{
      let res = service.getAllAuthor();
      expect(res[0].name).toBe('AAA');
  })
});
