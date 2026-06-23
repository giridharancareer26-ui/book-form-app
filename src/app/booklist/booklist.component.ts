import { Component } from '@angular/core';
import { BOOK_DATA } from '../data/book-data';
import { NgForOf, NgIf } from '@angular/common';
import { Book } from '../models/book';
@Component({
  selector: 'app-booklist',
  imports: [NgForOf, NgIf],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css',
})
export class BooklistComponent {
  displayBooks: Book[] = BOOK_DATA;
}
