import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FakeService} from '../_services/fakeService';
import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let service : FakeService;
  let category;
  beforeEach(()=>{
      service = new FakeService();
      category = {
          id:1,
          name:'Changed name',
      };
  })
  it('CategoryComponent works',()=>{
      expect(true).toBeTruthy();
  });

  //Edit Category
  it('Should Update Category to changed',()=>{
      let res = service.updateCategory(category);
      expect(res.name).toBe(category.name);
  })

  //Get All
  it('should get all Books',()=>{
      let res = service.getAllCategory();
      expect(res[0].name).toBe('AAA');
  })
});
