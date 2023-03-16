import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-my-orders',
  templateUrl: './user-my-orders.component.html',
  styleUrls: ['./user-my-orders.component.css']
})
export class UserMyOrdersComponent {
  orderList: any[] = [];

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getUseInfo().subscribe((res: any) => {
      this.orderList = res?.userOrders as any[];
    });
  }

  onCancel(item:any){
     
      this.user.updateOrder({ ...item, orderStatus: "Cancelled" });
      setTimeout(() => this.ngOnInit(), 2000);
    
  }
  
  
}
