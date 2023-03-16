import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admim-view-orders',
  templateUrl: './admim-view-orders.component.html',
  styleUrls: ['./admim-view-orders.component.css']
})
export class AdmimViewOrdersComponent {
  orderList: any[] = [];
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.admin.getAllOrders().subscribe((res: any) => {
      this.orderList = res as any[];
    });
  }

  onApprove(item: any) {
    this.admin.updateOrder({ ...item, orderStatus: "DELIVERED" });
    setTimeout(() => this.ngOnInit(), 2000);
  }

  onDecline(item: any){
    this.admin.updateOrder({...item, orderStatus: "Declined" });
    setTimeout(() => this.ngOnInit(), 2000);
  }
}


