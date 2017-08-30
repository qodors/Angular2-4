import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Jsonp,ConnectionBackend } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './shared/right-sidebar/rightsidebar.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlertService,AuthenticationService,UserService,BookService,AuthorService,CategoryService } from './pages/_services/index';
import { AuthGuard } from './pages/_guard/auth.guard';
import { HttpClient } from './pages/_services/http-client';
import { AlertComponent } from './pages/_directives/index';
import { LayoutComponent } from './layout/layout.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { BookComponent } from './pages/book/book.component';
import { AddbookComponent } from './pages/book/addbook/addbook.component';
import { AllBooksComponent } from './pages/book/allbooks/allbooks.component';
import { AuthorComponent } from './pages/author/author.component';
 
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },{
    path: 'logout',
    component: LogoutComponent
  },{
    path: 'register',
    component: RegisterComponent
  },{ 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },{
        path: 'book',
        loadChildren: './pages/book/book.module'
      },{
        path: 'addbook',
        loadChildren: './pages/book/addbook/addbook.module'
      },{
        path: 'allbooks',
        loadChildren: './pages/book/allbooks/allbooks.module'
      },{ 
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module'
      },{ 
        path: 'author',
        loadChildren: './pages/author/author.module'
      },{ 
        path: 'blank',
        loadChildren: './pages/blank/blank.module' 
      },{
        path: 'category',
        loadChildren: './pages/category/category.module'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AlertComponent,    
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    RightSidebarComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpClient,
    AuthGuard,
    AlertService,
    UserService,
    BookService,
    AuthenticationService,
    AuthorService,
    CategoryService,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
