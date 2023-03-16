import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
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
    const credentials: any = { ...ngForm.form.value, id: this.auth.genRandomId() };

    this.auth.registerAdmin(credentials);
    ngForm.resetForm();

  }


}
