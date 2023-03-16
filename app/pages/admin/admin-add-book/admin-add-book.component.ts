import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css']
})
export class AdminAddBookComponent {
  constructor(
    private alert: AlertService,
    private admin: AdminService,
  ) { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: any = { ...ngForm.form.value, bookId: this.admin.genRandomId() };

    this.admin.addBook(credentials);
    ngForm.resetForm();

  }
}
