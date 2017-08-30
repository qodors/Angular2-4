import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, BookService, AlertService, AuthorService } from '../../_services/index';
import { Author, Category } from '../../_models/index';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  invalid = false;
  invalidpdf = false;
  model: any = {};
  loading = false;
  title: string;
  subtitle: string;
  cover: File;
  pdf: File;
  authors: Author[] = [{ id: 0, user_id: null, name: "Select Auther", city: null, about: null }];
  categories: Category[] = [{ id: 0, user_id: null, name: "Select Auther" }];
  constructor(
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private alertSErvice: AlertService,
    private categoryService: CategoryService
  ) {
    this.title = "Add New Book";
    this.subtitle = "fill the following Details";
  }

  ngOnInit() {
    this.loading = true;
    this.authorService.getAll(0).subscribe(data => {
      if (data.error_code == 0) {
        this.authors = data.data;
      }
    });
    this.categoryService.getAll(0).subscribe(data => {
      this.categories = data.data;
    });
    this.loading = false;
  }

  //Preview
  previewFile(fileInput: any) {
    this.loading = true;
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.cover = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0]);
    this.loading = false;
  }

  // File Validation
  Validate(event) {
    this.loading = true;
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
    this.loading = false;
  }
  // Pdf File Validation
  ValidatePdf(event) {
    this.loading = true;
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
    this.loading = false;
  }

  //setName for main
  setName(newName) {
    this.model.author_name = newName;
  }

  addbook(event) {
    this.loading = true;

    let bookData = new FormData();
    bookData.append('book', JSON.stringify(this.model));
    if (this.cover)
      bookData.append('cover', this.cover, this.cover.name);
    if (this.pdf)
      bookData.append('pdf', this.pdf, this.pdf.name);

    this.bookService.create(bookData).subscribe(data => {
      if (data.error_code === 0) {
        this.alertSErvice.success(data.message, true);
        this.router.navigate(["/home/book"]);
      } else {
        this.alertSErvice.error(data.message, true);
      }
    });
    this.loading = false;
  }

}
