import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import {Book} from 'src/app/models/book.model'
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: number;
header:string;
book:Book={
  id:0,
  name:'',
  author:'',
  price:''
};
  constructor(private route:ActivatedRoute,
    private bookservice:BookService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.header=this.id===0?'Add Book':'Edit Book'
    if(this.id!=0){

      this.book=this.bookservice.onGetEdit(this.id);
    }
  }

  onSubmit(form :NgForm){
let book:Book={
  id:form.value.id,
  name:form.value.name,
  author:form.value.author,
  price:form.value.price
}
if(this.id===0){this.bookservice.onAdd(book);}
else{
  this.bookservice.onUpdate(book);
}

this.router.navigateByUrl('');
   
  }
}
