import { Injectable } from '@angular/core';
import { BOOK_DATA } from '../data/book-data';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = BOOK_DATA;
  selectedBook: Book | null = null;

  getbooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }
  setSelectedBook(book: Book) {
    this.selectedBook = { ...book };
  }

  getSelectedBook(): Book | null {
    return this.selectedBook;
  }
}
