import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admim-view-book',
  templateUrl: './admim-view-book.component.html',
  styleUrls: ['./admim-view-book.component.css']
})
export class AdmimViewBookComponent {
  bookList: any[] = [];
  selectedBook: any = {
    bookName: '',
    bookAuthor: '',
    publisher: '',
    price: 0,
  };

  constructor(private admin: AdminService) { }
  ngOnInit() {
    this.admin.getAllBooks().subscribe(res => {
      this.bookList = res as any[];
    });
  }

  onView(item: any) {
    this.selectedBook = { ...item };
  }

  onUpdate() {
    this.admin.updateBook(this.selectedBook);
    setTimeout(() => this.ngOnInit(), 2000);
  }

  onDelete(bookId: any){
    this.admin.deleteBook(bookId);
    setTimeout(()=> this.ngOnInit(), 2000);
  }
}
