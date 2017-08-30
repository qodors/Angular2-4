import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, AlertService, AuthenticationService} from '../../_services/index';
import { Book } from '../../_models/book';

var $ = require('jquery');
var dt = require('datatables.net');
var buttons = require( 'datatables.net-buttons' );
require( 'datatables.net-buttons/js/buttons.print.js' );
@Component({
	selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllBooksComponent implements OnInit {
	loading = false;
	title:string;
	subtitle:string;
	books: Book[] = [];	
	model: any = [];
	copy: any = [];
	user: any = JSON.parse(localStorage.getItem('User'));
	constructor(
		private router: Router,
		private bookService: BookService,
		private alertService: AlertService,
		private authenticationService: AuthenticationService
	) {
		this.title = "Books";  
		this.subtitle = "Manage Books"
	}

	ngOnInit(){
		this.bookService.getAll().subscribe(data =>{
			this.books = data.data;
		});
		setTimeout(function(){
			$('#allBookT').DataTable({	
				dom: 'Bfrtip',
				buttons: [
					'print'
				],
				"language": {
					"emptyTable": "No data available"
				}
			});
		},2000);
	}

	rateit(book){
		if(book.user_id == this.user.id){
			return;
		}
		const B = Object.assign({}, book);
		B['book_id'] = B.id;
		this.bookService.rateIt(B).subscribe(data=>{
			if(data.error_code == 0){
				this.alertService.success(data.message,true);
			}else{
				this.alertService.error(data.message,true);
			}
		});
	}
}