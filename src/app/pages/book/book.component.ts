import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BookService, AlertService, AuthenticationService, AuthorService, CategoryService } from '../_services/index';
import { Book, Author, Category } from '../_models/index';
import { environment } from 'environments/environment';

var $ = require('jquery');
var dt = require('datatables.net');
var buttons = require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.print.js');
@Component({
	selector: 'ea-blank',
	templateUrl: 'book.component.html',
	styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit, AfterViewInit {
	invalid = false;
	invalidpdf = false;
	loading = false;
	title: string;
	subtitle: string;
	books: Book[] = [];
	model: any = [];
	authors: Author[] = [];
	categories: Category[] = [];
	copy: any = [];
	cover : File;
	pdf : File;
	constructor(
		private router: Router,
		private bookService: BookService,
		private authorService: AuthorService,
		private categoryService: CategoryService,
		private alertService: AlertService,
		private authenticationService: AuthenticationService
	) {
		this.title = "Books";
		this.subtitle = "Manage Books"
	}

	ngOnInit() {
		this.authorService.getAll(0).subscribe(data =>{
			if(data.error_code == 0){
				this.authors = data.data;
			}
		});
		this.bookService.getMyAll().subscribe(data => {
			this.books = data.data;
		});
		this.categoryService.getAll(0).subscribe(data =>{
			this.categories = data.data;
		});
		setTimeout(function () {
			$('#bookT').DataTable({
				dom: 'Bfrtip',
				buttons: [
					'print'
				],
				"language": {
					"emptyTable": "No data available"
				}
			});
		}, 2000);
	}
	delete(book) {
		this.bookService.delete(book.id).subscribe(data => {
			if (data.error_code == 0) {
				this.books.splice(this.books.indexOf(book), 1);
				this.alertService.success(data.message, true);
			} else {
				this.alertService.error(data.message, true);
			}
		});
	}
	edit(book) {
		this.copy = Object.assign({}, book);
		this.model = book;
	}
	editSubmit(event,newModel) {
		this.Validate(event);
		this.loading = true;

		let bookData = new FormData();
		bookData.append('book',JSON.stringify(newModel));
		if(this.cover)
			bookData.append('cover',this.cover,this.cover.name);
		if(this.pdf)
			bookData.append('pdf',this.pdf,this.pdf.name);

		this.bookService.update(bookData).subscribe(data => {
			if (data.error_code == 0) {
				if(data.data.pdf){
					newModel.pdf = data.data.pdf;
				}
				this.alertService.success(data.message, true);
			} else {
				this.alertService.error(data.message, true);
			}
			this.loading = false;
			$('#hiddenclose').click();
		});
	}
	close() {
		const b = this.books.find(book => book.id === this.copy.id);
		if (b) {
			for (let key in this.copy) {
				b[key] = this.copy[key];
			}
		}
	}
	setNew() {
		console.log(this.model);
		const b = this.books.find(book => book.id === this.model.id);
		if (b) {
			for (let key in this.copy) {
				b[key] = this.copy[key];
			}
		}
	}

	//Preview
	previewFile(fileInput: any) {
		let reader = new FileReader();
		reader.onload = (e: any) => {
			this.model.cover = e.target.result;
		}
		reader.readAsDataURL(fileInput.target.files[0]);
	}

	// File Validation
	Validate(event) {
		if (event.target.files && event.target.files[0]) {
			let file = event.target.files[0];
			let Allowed = ['image/png', 'image/jpeg', 'image/jpg'];
			if (file == null || Allowed.indexOf(file.type) <= -1) {
				//Not an Image
				this.invalid = true;
			} else {
				this.previewFile(event);
				this.invalid = false;
			}
			this.cover = file;
		}
	}
	// Pdf File Validation
	ValidatePdf(event) {
		if (event.target.files && event.target.files[0]) {
		  let file = event.target.files[0];
		  let Allowed = ['application/pdf'];
		  if (file == null || Allowed.indexOf(file.type) <= -1) {
			//Not an Image
			this.invalidpdf = true;
		  } else {
			this.invalidpdf = false;
		  }
		  this.pdf = file;
		}
	}
	
	  //setName for main
	  setName(newName) {
		this.model.author_name = newName;
	  }
	ngAfterViewInit() { }
}