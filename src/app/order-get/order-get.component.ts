import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import Student from '../Student';
@Component({
  selector: 'app-order-get',
  templateUrl: './order-get.component.html',
  styleUrls: ['./order-get.component.css']
})
export class OrderGetComponent implements OnInit {
  students: Student[];
constructor(private os: OrdersService) { }

  ngOnInit() {

    this.os
    .getOrderDetails()
    .subscribe((data: Student[]) => {
      this.students = data;
    });
  }
  deleteOrder(id) {
      this.os.deleteOrder(id).subscribe(res => {

        this.students.splice(id, 1);



      });

  }

}


