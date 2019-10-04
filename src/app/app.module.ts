import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookAddComponent } from './book-add/book-add.component';
import { BookGetComponent } from './book-get/book-get.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookAdminComponent } from './book-admin/book-admin.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BooksService } from './books.service';
import {OrdersService} from './orders.service';
import { OrderGetComponent } from './order-get/order-get.component';

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookGetComponent,
    BookEditComponent,
    BookAdminComponent,
    StudentAddComponent,
    OrderGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    NgbModule
  ],
  providers: [BooksService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
