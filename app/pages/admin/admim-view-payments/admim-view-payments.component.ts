import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admim-view-payments',
  templateUrl: './admim-view-payments.component.html',
  styleUrls: ['./admim-view-payments.component.css']
})
export class AdmimViewPaymentsComponent {
  payments: any[] = [];
  constructor(private admin: AdminService) { }
  ngOnInit() {
    this.admin.getAllPayments().subscribe(res => {
      this.payments = res as any[];
    });
  }
}
