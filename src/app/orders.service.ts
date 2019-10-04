import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  uri = 'http://localhost:4000/orders';
  constructor(private http: HttpClient) { }

  addStudent(BookName, BookDescription, BookPrice, StudentName, StudentId, IssueDate ) {
    const obj = {
      BookName,
      BookDescription,
      BookPrice,
      StudentName,
      StudentId,
      IssueDate
      };
    console.log('${this.uri}/add');
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));

}

getOrderDetails() {

  return this
       .http
       .get(`${this.uri}`);

    }
    deleteOrder(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
}
}
