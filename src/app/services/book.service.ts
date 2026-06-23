import { Injectable } from '@angular/core';
import { BOOK_DATA } from '../data/book-data';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = BOOK_DATA;

  getbooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
