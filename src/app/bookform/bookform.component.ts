import { Component } from '@angular/core';
import { BOOK_DATA } from '../data/book-data';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookform',
  imports: [FormsModule, CommonModule],
  templateUrl: './bookform.component.html',
  styleUrl: './bookform.component.css',
})
export class BookformComponent {
  books: Book[] = [];
  formBook: Book = {
    bookId: 0,
    title: '',
    author: '',
    category: '',
    price: 0,
    publishedDate: '',
  };

  constructor(private booksService: BookService) {}

  ngOnInit() {
    this.books = this.booksService.getbooks();
    this.formBook.bookId = this.books.length + 1;

    const selected = this.booksService.getSelectedBook();
    if (selected) {
      this.formBook = { ...selected };
    } else {
      this.resetForm();
    }
  }

  saveBook() {
    this.booksService.addBook(this.formBook);
    console.log('Book saved:', this.formBook);
    this.resetForm();
    console.log('Updated book list:', this.books);
  }

  private resetForm() {
    const nextId =
      this.books.length > 0
        ? Math.max(...this.books.map((b) => b.bookId)) + 1
        : 1;

    this.formBook = {
      bookId: nextId,
      title: '',
      author: '',
      category: '',
      price: 0,
      publishedDate: '',
    };
  }
}
