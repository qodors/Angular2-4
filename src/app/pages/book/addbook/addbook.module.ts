import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook.component';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Books',
	  urls: [{title: 'Books',url: 'book'},{title: 'Add new'}]
    },
	component: AddbookComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [AddbookComponent]
})
export default class addBookModule { }