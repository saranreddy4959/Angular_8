import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../Model/Book';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('lastacc')
  lastAccessed = "";

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  addBook(){
      const book = new Book();
      book.title= 'another Book';
      book.author = 'matt';
      this.dataService.addBook(book);
      
  }

  addBook2(){
    const book = new Book();
    book.title= 'another Book';
    book.author = 'james';
    this.dataService.addBook(book);
    
}
}
