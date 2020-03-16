
import { Book } from '../Model/Book';
import { EventEmitter } from '@angular/core';
import { DataServiceInterface } from '../data.service';

export class mockDataService implements DataServiceInterface{
    books = new Array<Book>();

    bookAddedEvent = new EventEmitter<Book>();
    bookDeleteEvent = new EventEmitter<Book>();


    addBook(book : Book){

    }
    deleteBook(){}
}