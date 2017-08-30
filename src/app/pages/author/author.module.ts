import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author.component';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Author page',
      urls: [{title: 'Authors',url: 'author'},{title: 'Authors'}]
    },
	component: AuthorComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [AuthorComponent]
})
export default class AuthorModule { }