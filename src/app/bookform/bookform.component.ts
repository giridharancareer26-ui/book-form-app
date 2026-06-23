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

  constructor(private booksService: BookService) {}
  ngOnInit() {
    this.books = this.booksService.getbooks();
    this.formBook.bookId = this.books.length + 1;
  }
  formBook: Book = {
    bookId: 0,
    title: '',
    author: '',
    category: '',
    price: 0,
    publishedDate: '',
  };

  saveBook() {
    this.booksService.addBook(this.formBook);
    console.log('Book saved:', this.formBook);
    this.formBook = {
      bookId: this.books.length + 1,
      title: '',
      author: '',
      category: '',
      price: 0,
      publishedDate: '',
    };
    console.log('Updated book list:', this.books);
  }
}
