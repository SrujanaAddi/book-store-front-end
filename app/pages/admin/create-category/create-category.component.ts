import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  constructor(private alert: AlertService, private admin: AdminService) { }

  bookList: any[] = [];
  ngOnInit() {
    this.admin.getAllBooks().subscribe(res => {
      this.bookList = res as any[];
    });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    this.admin.addCategory({ categoryId: this.admin.genRandomId(), ...ngForm.form.value });

  }
}
