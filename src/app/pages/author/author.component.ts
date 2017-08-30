import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Author } from '../_models/index';
import { AuthorService, AlertService } from '../_services/index';

var $ = require('jquery');
var Table;
var dt = require('datatables.net');
var buttons = require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.print.js');
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  loading = false;
  authors: Author[] = [];
  model: any = {};
  copy: any;
  title: string;
  subtitle: string;
  constructor(
    private router: Router,
    private authorService: AuthorService,
    private alertService: AlertService,
  ) {
    this.title = "Author";
    this.subtitle = "Manage Authors"
  }
  dataTable(){
    Table = $('#example23').DataTable({
      data:this.authors,
      dom: 'Bfrtip',
      buttons: [
        'print'
      ],
      "language": {
        "emptyTable": "No data available"
      }
    });
  }

  ngOnInit() {
    this.authorService.getAll(true).subscribe(data => {
      this.authors = data.data;
    });
    setTimeout(function () {
      Table = $('#authorT').DataTable({
        data:this.authors,
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

  edit(book) {
    this.copy = Object.assign({}, book);
    this.model = book;
  }
  editSubmit(newModel) {
    this.loading = true;
    let authorData = new FormData();
    authorData.append('author', JSON.stringify(newModel));
    this.authorService.update(authorData).subscribe(data => {
      if (data.error_code === 0) {
        this.alertService.success(data.message, true);
      } else {
        this.alertService.error(data.message, true);
      }
    });
    this.loading = false;
    $('#hiddenclose').click();
  }
  close(isnew) {
    if (isnew)
      return;
    const b = this.authors.find(author => author.id === this.copy.id);
    if (b) {
      for (let key in this.copy) {
        b[key] = this.copy[key];
      }
    }
  }

  delete(author,index) {
    this.authorService.delete(author.id).subscribe(data => {
      if (data.error_code == 0) {
        this.authors.splice(index, 1);
        this.alertService.success(data.message, true);
      } else {
        this.alertService.error(data.message, true);
      }
    })
  }

  addNewForm() {
    this.model = { set: true };
  }

  addNew() {
    this.loading = true;
    let authorData = new FormData();
    authorData.append('author', JSON.stringify(this.model));
    this.authorService.create(authorData).subscribe(data => {
      if (data.error_code === 0) {
        this.authors.push(data.data);
        this.alertService.success(data.message, true);
        window.location.reload();
      } else {
        this.alertService.error(data.message, true);
      }
    });
    this.loading = false;
    $('#hiddenclose').click();
  }
}
