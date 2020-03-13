import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {
  
  
  subscription : Subscription;
  
  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
   this.subscription = this.dataService.bookDeleteEvent.subscribe(
     (book) => {
        alert(`the book called ${book.title} was deleted`);
     },
     (error) => {
        alert(`No books were deleted - the error was` + error);
     }
   );

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

   onButtonClick(){
     this.dataService.deleteBook();
     }
  }


