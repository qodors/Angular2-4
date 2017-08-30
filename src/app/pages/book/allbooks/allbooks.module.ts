import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './allbooks.component';
import { RatingModule } from 'ng2-rating';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Available Books',
	  urls: [{title: 'Books',url: 'book'},{title: 'all'}]
    },
	component: AllBooksComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
		RouterModule.forChild(routes),
		RatingModule
    ],
	declarations: [AllBooksComponent]
})
export default class allBookModule { }