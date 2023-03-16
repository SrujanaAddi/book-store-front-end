import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-category-list',
  templateUrl: './user-category-list.component.html',
  styleUrls: ['./user-category-list.component.css']
})
export class UserCategoryListComponent {
  categories: any[] = [];
  constructor(private user: UserService) { }
  ngOnInit() {
    this.user.getAllCategories().subscribe(res => {
      this.categories = res as any[];
    });
  }
}
