import { Injectable } from '@angular/core';
import {Book} from  '../models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
books:Book[]=[
  {
    id: 1,
    name: "THE GUIDE",
    author: "R.K. NARAYAN",
    price: "450"
  },
  {
    id: 2,
    name: "THE PRIVATE LIFE OF AN INDIAN PRINCE",
    author: "MULK RAJ ANAND",
    price: "650"
  },
  {
    id: 3,
    name: "TRAIN TO PAKISTAN",
    author: "KHUSHWANT SINGH",
    price: "500"
  },
  {
    id: 4,
    name: "GODAN ",
    author: "MUNSHI PREMCHAND",
    price: "450"
  },
  {
    id: 5,
    name: "THE ROOM ON THE ROOF ",
    author: "RUSKIN BOND",
    price: "450"
  }
];

  constructor() { }
  onGet(){
    return this.books;
  }
  onAdd(book:Book){
    this.books.push(book)
  }
  onDelete(id:Number){
    let book=this.books.find(x=>x.id===id);
    let index=this.books.indexOf(book,0);
    this.books.splice(index,1);

  }
  onGetEdit(id:Number){
    return this.books.find(x=>x.id===id)
  }
  onUpdate(book:Book){
    let  oldbook=this.books.find(x=>x.id===book.id);
    oldbook.name=book.name;
    oldbook.author=book.author;
    oldbook.price=book.price;
    
  }
}
