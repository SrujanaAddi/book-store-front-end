import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-view-categories',
  templateUrl: './admin-view-categories.component.html',
  styleUrls: ['./admin-view-categories.component.css']
})
export class AdminViewCategoriesComponent {
  categories: any[] = [];
  selectedCat: any = {
    categoryName: ''
  };
  constructor(private user: UserService) { }
  ngOnInit() {
    this.user.getAllCategories().subscribe(res => {
      this.categories = res as any[];
    });
  }
  onView(item: any) {
    this.selectedCat = { ...item };
  }

  onUpdate() {
    this.user.updateCategory(this.selectedCat);
    setTimeout(() => this.ngOnInit(), 2000);
  }
}
