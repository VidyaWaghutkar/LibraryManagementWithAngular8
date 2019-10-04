import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: BooksService) {
    this.createForm();
  }

    createForm() {
      this.angForm = this.fb.group({
        BookName: ['', Validators.required ],
        BookDescription: ['', Validators.required ],
        BookPrice: ['', Validators.required ]
      });
    }
    addBook(BookName, BookDescription, BookPrice) {
      this.ps.addBook(BookName, BookDescription, BookPrice);
    }

  ngOnInit() {
  }

}
