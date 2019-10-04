import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAddComponent } from './book-add/book-add.component';
import { BookGetComponent } from './book-get/book-get.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookAdminComponent } from './book-admin/book-admin.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { OrderGetComponent } from './order-get/order-get.component';


const routes: Routes = [
 {
    path: 'book/create',
    component: BookAddComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'books',
    component: BookGetComponent
  },
  {
    path: 'admin',
    component: BookAdminComponent
  },
  {
    path: 'student',
    component: StudentAddComponent
  },
  {
    path: 'orderDetails',
    component: OrderGetComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

