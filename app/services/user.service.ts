import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }

  addToCart(bookid: any) {
    const userid = sessionStorage.getItem("SESSION_USER_ID");
    this.api.post(`/cart/${userid}/${bookid}`, {}).subscribe((res: any) => {
      this.alert.success(res?.message || 'Book added to cart')
    }, this.alert.apiFail);
  }
  placeOrder(data: any) {
    const userid = sessionStorage.getItem("SESSION_USER_ID");
    this.api.post('/addPayment', data.payment).subscribe((pmt: any) => {
      this.api.post(`/order/${userid}`, { ...data, payment: pmt }).subscribe((res: any) => {
        this.alert.success(res?.message || 'Book order placed');

      }, this.alert.apiFail);
    })

  }

  deleteCart(cartId: any) {
    const userid = sessionStorage.getItem("SESSION_USER_ID");
    this.api.delete(`/cart/${cartId}`).subscribe((res: any) => {
      this.alert.success(res?.message || 'Cart Empty')
    }, this.alert.apiFail);
  }
  updateCategory(data: any) {
    this.api.put(`/category`, data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Successfully updated')
    }, this.alert.apiFail);
  }

  removeBookfromCart(id:any, cartId: any) {
    const userid = sessionStorage.getItem("SESSION_USER_ID");
    this.api.delete(`/book/${cartId}/{cartid}?cartId=${id}`).subscribe((res: any) => {
      this.alert.success(res?.message || 'Book removed from your cart')
    }, this.alert.apiFail);
  }

 


  getMyCart() {
    const userid = sessionStorage.getItem("SESSION_USER_ID");
    return this.api.get(`/booksincart/${userid}`);
  }
  getUseInfo() {
    const userid = sessionStorage.getItem("SESSION_USER_ID");
    return this.api.get(`/User/${userid}`)
  }
  getAllCategories() {
    return this.api.get(`/categories`);
  }
  getBooksByName(bookName: any) {
    return this.api.get(`/bookname/${bookName}`);
  }
  getBooksByAuthor(author: any) {
    return this.api.get(`/books/${author}`);
  }

  updateOrder(data: any) {
    this.api.put(`/order`, data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Order Cancelled')
    }, this.alert.apiFail);
  }



  //RAMDON
  genRandomId() {
    return Math.floor(Math.random() * 100000);
  }
}
