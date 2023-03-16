import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-book-cart',
  templateUrl: './user-book-cart.component.html',
  styleUrls: ['./user-book-cart.component.css']
})
export class UserBookCartComponent {
  cart: any = {};
  paymentMode = "";
  constructor(private user: UserService, private alert: AlertService) { }
  ngOnInit() {
    this.user.getMyCart().subscribe(res => {
      this.cart = res as any;
    });
  }

  onPlaceOrder() {
    if (!this.paymentMode) {
      this.alert.error("Please select payment mode");
      return;
    }

    const req = {
      orderId: this.user.genRandomId(),
      orderDate: "2023-03-03",
      totalCost: this.cart?.totalCost,
      payment: {
        paymentId: this.user.genRandomId(),
        mode: this.paymentMode
      },
      books: this.cart?.booksInCart || [],
      quantity: this.cart.quantity,
      orderStatus: "PENDING"
    }

    this.user.placeOrder(req);
    this.user.deleteCart(this.cart.cartId);

  }

  onEmptyCart() {
    this.user.deleteCart(this.cart.cartId);
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }

  OnRemoveBook(cartId:any, id:any){
    this.user.removeBookfromCart(cartId, id);
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
    
  }
}
