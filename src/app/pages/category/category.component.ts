import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Category } from '../_models/index';
import { CategoryService, AlertService } from '../_services/index';

var $ = require('jquery');
var Table;
var dt = require('datatables.net');
var buttons = require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.print.js');
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  loading = false;
  categories: Category[] = [];
  model: any = {};
  copy: any;
  title: string;
  subtitle: string;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private alertService: AlertService,
  ) {
    this.title = "Author";
    this.subtitle = "Manage Authors"
  }

  ngOnInit() {
    this.categoryService.getAll(true).subscribe(data => {
      this.categories = data.data;
    });
    setTimeout(function () {
      Table = $('#categoryT').DataTable({
        data:this.categories,
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
    authorData.append('category', JSON.stringify(newModel));
    this.categoryService.update(authorData).subscribe(data => {
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
    const b = this.categories.find(author => author.id === this.copy.id);
    if (b) {
      for (let key in this.copy) {
        b[key] = this.copy[key];
      }
    }
  }

  delete(author) {
    this.categoryService.delete(author.id).subscribe(data => {
      if (data.error_code == 0) {
        this.categories.splice(this.categories.indexOf(author), 1);
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
    authorData.append('category', JSON.stringify(this.model));
    this.categoryService.create(authorData).subscribe(data => {
      if (data.error_code === 0) {
        this.categories.push(data.data);
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
