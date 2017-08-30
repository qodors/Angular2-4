import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LayoutComponent } from '../../layout/layout.component';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Dash Board',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Statistics'}]
    },
	component: LoginComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [LoginComponent],
	providers: [LayoutComponent]
})
export default class StarterModule { }