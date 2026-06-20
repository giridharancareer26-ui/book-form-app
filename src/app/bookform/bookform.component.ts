import { Component } from '@angular/core';
import { BOOK_DATA } from '../data/book-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookform',
  imports: [FormsModule],
  templateUrl: './bookform.component.html',
  styleUrl: './bookform.component.css',
})
export class BookformComponent {
  book = BOOK_DATA[0];
  saveBook() {
    // this.book = BOOK_DATA[BOOK_DATA.length + 1];
    // this.book.bookId = BOOK_DATA.length + 1;
    // this.book.title = this.book.title;
    // this.book.author = this.book.author;
    // this.book.category = this.book.category;
    // this.book.price = this.book.price;
    // this.book.publishedDate = this.book.publishedDate;
    console.log('Book Saved');
  }
}
