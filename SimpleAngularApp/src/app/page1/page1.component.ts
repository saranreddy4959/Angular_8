import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../Model/Book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {


  pageName = 'Page1';
  books: Array<Book>;
  numberOfBooksWrittenByMatt : number;

  subscription : Subscription;
  constructor(private dataService : DataService ) { 
    //this.dataService = dataService
  }
 
  ngOnInit(){
    setTimeout( () => {this.pageName= 'FirstPage'},5000)
    this.books= this.dataService.books;
    this.numberOfBooksWrittenByMatt = this.books.filter( it => {return it.author=== 'matt' ;}).length;
    this.subscription = this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        //do something here
        if(newBook.author === 'matt'){
          this.numberOfBooksWrittenByMatt++;
        }
      },
      (error) => {
        //do something here
          console.log("an error eccured", error);
      },
      ()=>{
        //complete event
      }
    );
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

  onButtonClick(){
    alert('hello - the date today is '+ new Date());
  }

}
