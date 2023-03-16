import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view-books',
  templateUrl: './user-view-books.component.html',
  styleUrls: ['./user-view-books.component.css']
})
export class UserViewBooksComponent {
  authorName = "";
  bookName = "";

  bookList: any[] = [];
  constructor(private admin: AdminService, private user: UserService) { }
  ngOnInit() {
    this.admin.getAllBooks().subscribe(res => {
      this.bookList = res as any[];
    });
  }

  onAddToCart(bookId: any) {
    this.user.addToCart(bookId)
  }

  searchByName() {
    this.user.getBooksByName(this.bookName).subscribe(res => {
      this.bookList = res as any[];
      this.bookName = "";
    });
  }
  searchByAuthor() {
    this.user.getBooksByAuthor(this.authorName).subscribe(res => {
      this.bookList = res as any[];
      this.authorName = ""
    });
  }
}
