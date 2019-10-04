import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  uri = 'http://localhost:4000/books';

  constructor(private http: HttpClient) { }

  addBook(BookName, BookDescription, BookPrice) {
    const obj = {
      BookName,
      BookDescription,
      BookPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getBooks() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editBook(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    updateBook(BookName, BookDescription, BookPrice, id) {
      const obj = {
        BookName,
        BookDescription,
        BookPrice
      };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

deleteBook(id) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}
}
