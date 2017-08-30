import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { RatingModule } from 'ng2-rating';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Books',
	  urls: [{title: 'Books',url: 'book'},{title: 'Manage'}]
    },
	component: BookComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
		RouterModule.forChild(routes),
		RatingModule
    ],
	declarations: [BookComponent]
})
export default class BookModule { }