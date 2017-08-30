import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Category page',
      urls: [{title: 'Category',url: 'category'},{title: 'Categories'}]
    },
	component: CategoryComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [CategoryComponent]
})
export default class CategoryModule { }