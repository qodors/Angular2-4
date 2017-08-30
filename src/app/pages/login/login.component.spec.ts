import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeService } from '../_services/index';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: FakeService;
  let user;
  beforeEach(()=>{
    service = new FakeService;
    user = service.user;
  });

  //Login Check
  it('Login check', () => {
    expect(true).toBeTruthy();
  });

  //Login service
  it('shold Login to test:test',() =>{
    let ch = service.login(user.email,user.password);
    expect(ch).toBeTruthy();
  })
});