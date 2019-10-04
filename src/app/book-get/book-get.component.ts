import { Component, OnInit } from '@angular/core';
import Book from '../Book';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-get',
  templateUrl: './book-get.component.html',
  styleUrls: ['./book-get.component.css']
})
export class BookGetComponent implements OnInit {
books: Book[];
  constructor(private ps: BooksService) { }

  ngOnInit() {

    this.ps
    .getBooks()
    .subscribe((data: Book[]) => {
      this.books = data;
    });
}
deleteBook(id) {
  this.ps.deleteBook(id).subscribe(res => {

    this.books.splice(id, 1);



  });
}
}
