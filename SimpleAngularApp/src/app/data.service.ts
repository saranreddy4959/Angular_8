import { Injectable, EventEmitter } from '@angular/core';
import { Book } from './Model/Book';

export interface DataServiceInterface{
  books : Array<Book>;
  bookAddedEvent: EventEmitter<Book>;
  bookDeleteEvent: EventEmitter<Book>;
  addBook(book : Book);
  deleteBook();
}


@Injectable({
  providedIn: 'root'
})
export class DataService implements DataServiceInterface{

  books : Array<Book>;
  bookAddedEvent = new EventEmitter<Book>();
  bookDeleteEvent = new EventEmitter<Book>();

  constructor() { 

    // this.books = new Array<Book>();
    // const book1 = new Book();
    // book1.title = "First Book";
    // book1.author= "saran";
    // book1.price = 3.99;
    // this.books.push(book1);

    // const book2 = new Book();
    // book2.title = "Second Book";
    // book2.author= "saran2";
    // book2.price = 5.99;
    // this.books.push(book2);

    // const book3 = new Book();
    // book3.title = "Third Book";
    // book3.author= "saran3";
    // book3.price = 8.99;
    // this.books.push(book3);

    this.books = new Array<Book>();
    const book1 = new Book();
    book1.title = 'first book';
    book1.author = 'matt';
    book1.price = 3.99;
    this.books.push(book1);

    const book2 = new Book();
    book2.title = 'second book';
    book2.author = 'james';
    book2.price = 5.99;
    this.books.push(book2);

    const book3 = new Book();
    book3.title = 'third book';
    book3.author = 'laura';
    book3.price = 8.99;
    this.books.push(book3);
  }
  addBook(book : Book){

    if(book.author === "james"){
        this.bookAddedEvent.error("books by james are not allowed");
    }
    else{
    this.books.push(book);
    this.bookAddedEvent.emit(book);
    }
  }

  deleteBook(){
    if(this.books.length>0){
    const book = this.books.pop();
    this.bookDeleteEvent.emit(book);
    }
  else{
    this.bookDeleteEvent.error("There are no books to delete");
  }
}
}
