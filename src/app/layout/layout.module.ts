import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule,Jsonp,ConnectionBackend } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from '../shared/navigation/navigation.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { AlertService,AuthenticationService,UserService } from '../pages/_services/index';
import { AuthGuard } from '../pages/_guard/auth.guard';
import { HttpClient } from '../pages/_services/http-client';
import { AlertComponent } from '../pages/_directives/index';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  
];

@NgModule({
  declarations: [
    AlertComponent,    
    NavigationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpClient,AuthGuard,UserService,AuthenticationService,LoginComponent,RegisterComponent
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
