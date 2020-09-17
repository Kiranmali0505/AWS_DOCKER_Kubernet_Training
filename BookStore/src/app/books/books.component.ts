import { Component, OnInit } from '@angular/core';


import {BookService} from '../services/book.service';
import {Book} from '../models/book.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
public books:Book[];
  constructor(
    private bookservice:BookService
  ) { }

  ngOnInit(): void {
this.books=this.bookservice.onGet();
console.log(this.books);
  }
onDelete(id:number){
  this.bookservice.onDelete(id);
}

}
