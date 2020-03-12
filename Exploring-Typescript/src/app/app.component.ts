import { Component } from '@angular/core';
import { Book, Video, SubjectArea } from 'src/model/Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exploring-Typescript';

  constructor(){

    console.log(SubjectArea.HISTORY);
    console.log(SubjectArea[2]);

    for(const subject in SubjectArea){
      console.log(subject);
    }

    const enumarray = Object.keys(SubjectArea);
    for(const value of enumarray.slice(enumarray.length/2)){
      console.log(value);
    }

    this.objectEquality();
    let myBook = new Book("Saran");
    let myvideo : Video;

    myBook.title = "Business men acheiving";
    console.log(myBook.toString());

    myBook.price= 100;
    console.log("To Buy this Book it will cost "+myBook.pricewithTax(0.2))


    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const oddnumbers = numbers.filter(
      num => {
        return num % 2  === 1;
      }
    );
    console.log(oddnumbers);
  }


  objectEquality(){

      let myValue : number; //it is currently undefined

      console.log(myValue);
      console.log(1 == 1);
      console.log(1===1);
  }
}
