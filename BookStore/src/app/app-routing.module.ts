import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {EditComponent} from './books/edit/edit.component';
const routes: Routes = [
  {
    path:"" ,component:BooksComponent
  },
  {
    path: "book/add/:id",component :EditComponent
  },
  {
    path:"book/edit/:id", component:EditComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
