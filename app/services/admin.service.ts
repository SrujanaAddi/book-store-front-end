import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }



  getAllOrders() {
    return this.api.get(`/orders`);
  }
  getAllCustomers() {
    return this.api.get(`/api/users`);
  }

  getAllPayments() {
    return this.api.get(`/allPayments`);
  }

  // BOOKS
  addBook(data: any) {
    this.api.post('/book', data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Book registration successful.')
    }, this.alert.apiFail);
  }
  getAllBooks() {
    return this.api.get(`/books`);
  }

  updateOrder(data: any) {
    this.api.put(`/order`, data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Order Updated')
    }, this.alert.apiFail);
  }
  updateBook(data: any) {
    this.api.put(`/book`, data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Book Updated')
    }, this.alert.apiFail);
  }

  getAllCategories() {
    return this.api.get(`/categories`);
  }

  //RAMDON
  genRandomId() {
    return Math.floor(Math.random() * 100000);
  }
  addCategory(data: any) {
    this.api.post('/category', data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Category registration successful.')
    }, this.alert.apiFail);
  }

  addBookToCategory(data: any) {
    this.api.post('/category', data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Category registration successful.')
    }, this.alert.apiFail);
  }

  deleteBook(bookId: any) {
    const userid = sessionStorage.getItem("SESSION_USER_ID");
    this.api.delete(`/delbook/${bookId}`).subscribe((res: any) => {
      this.alert.success(res?.message || 'Delete book')
    }, this.alert.apiFail);
  }
}
