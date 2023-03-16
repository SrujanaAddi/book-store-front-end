import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  constructor(
    private alert: AlertService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: any = { ...ngForm.form.value, userOrders: [], cart: null, userId: 0 };

    this.auth.registerUser(credentials);
    ngForm.resetForm();

  }



}
