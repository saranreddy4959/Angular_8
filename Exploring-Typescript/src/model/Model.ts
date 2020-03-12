export enum SubjectArea{
    ART,
    HISTORY,
    SCIENCE,
    LITERATURE
}


export class Book {
     title : string
     author : string
     price : number
     readonly id : number = 1;

     constructor(author:string, title?:string){
         this.author=author;
         if(title){
             this.title=title;
         }

     }

     toString(){
         //return 'title '+this.title+ ' author '+this.author;
         return `title ${this.title}, author ${this.author}`;
     }

     pricewithTax(taxRate: number): number{
         return this.price * (1+taxRate);
     }
}




export class Video {
    private title : string
    private author : string
    private price : number
}