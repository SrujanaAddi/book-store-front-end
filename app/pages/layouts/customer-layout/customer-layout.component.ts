import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent {
  APP_NAME = APP_NAME;
  constructor(private router: Router) { }
  onLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
