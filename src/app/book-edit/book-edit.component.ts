import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  angForm: FormGroup;
  book: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private ps: BooksService, private fb: FormBuilder) {
    this.createForm();
}
createForm() {
  this.angForm = this.fb.group({
    BookName: ['', Validators.required ],
    BookDescription: ['', Validators.required ],
    BookPrice: ['', Validators.required ]
  });
}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editBook(params['id']).subscribe(res => {
        this.book = res;
    });
  });
  }
  updateBook(BookName, BookDescription, BookPrice, id) {
    this.route.params.subscribe(params => {
      this.ps.updateBook(BookName, BookDescription, BookPrice, params.id);
      this.router.navigate(['books']);
    });
  }

}
