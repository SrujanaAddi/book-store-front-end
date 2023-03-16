import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDTO, UserDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService, private alert: AlertService, private router: Router) { }

  registerUser(data: any) {
    this.api.post('/user', data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Registration successful.')
    }, this.alert.apiFail);
  }
  registerAdmin(data: any) {
    this.api.post('/admin', data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Registration successful.')
    }, this.alert.apiFail);
  }

  loginUser(data: any) {
    this.api.post('/user/login', data).subscribe((res: any) => {
      if (!res?.emailId) {
        this.alert.error("Wrong credentials");
        return;
      }
      sessionStorage.setItem('SESSION_USERNAME', data.emailId);
      sessionStorage.setItem('SESSION_USER_ID', res.userId);
      sessionStorage.setItem('SESSION_USER_DATA', JSON.stringify(res));
      sessionStorage.setItem('SESSION_ROLE', 'USER');
      this.router.navigateByUrl("/user")
    }, this.alert.apiFail);
  }
  loginAdmin(data: any) {
    this.api.post('/admin/login', data).subscribe((res: any) => {
      if (!res?.email) {
        this.alert.error("Wrong credentials");
        return;
      }
      sessionStorage.setItem('SESSION_USERNAME', data.email);
      sessionStorage.setItem('SESSION_USER_ID', res.id);
      sessionStorage.setItem('SESSION_USER_DATA', JSON.stringify(res));
      sessionStorage.setItem('SESSION_ROLE', 'ADMIN');
      this.router.navigateByUrl("/admin")
    }, this.alert.apiFail);
  }



  getLoggedInCustomer() {
    return JSON.parse(sessionStorage.getItem("SESSION_USER_DATA") || '') as any;
  }

  adminUpdatePassword(credentials: any) {
    const userId = sessionStorage.getItem("SESSION_USER_ID")
    this.api.put(`/admin/${userId}`, credentials).subscribe(res => {
      this.alert.success('Update successful.');
    }, this.alert.apiFail);
  }

  userUpdatePassword(credentials: any) {
    const userId = sessionStorage.getItem("SESSION_USER_ID")
    this.api.put(`/user/${userId}`, credentials).subscribe(res => {
      this.alert.success('Update successful.');
    }, this.alert.apiFail);
  }

  isLoggedIn() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_USER_ID'))
      return true;
    return false;
  }

  isAdmin() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'ADMIN')
      return true;
    return false;
  }

  isStaff() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'CUSTOMER')
      return true;
    return false;
  }

  genRandomId() {
    return Math.floor(Math.random() * 100000);
  }

}
