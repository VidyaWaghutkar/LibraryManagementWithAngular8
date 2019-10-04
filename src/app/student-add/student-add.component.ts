import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Book from '../Book';
import { OrdersService } from '../orders.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
 angForm: FormGroup;
 books: Book[];
constructor(private fb: FormBuilder, private os: OrdersService, private ps: BooksService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      StudentName: ['', Validators.required ],
      StudentId: ['', Validators.required ],
      IssueDate: ['', Validators.required]
    });
  }
  addStudent(BookName, BookDescription, BookPrice, StudentName, StudentId, IssueDate) {

    this.os.addStudent(BookName, BookDescription, BookPrice, StudentName, StudentId, IssueDate);

  }
  ngOnInit() {
    this.ps
    .getBooks()
    .subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  }

