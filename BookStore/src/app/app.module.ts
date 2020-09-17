import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'; 
import { ReactiveFormsModule} from '@angular/forms'
import {HttpBackend, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import {BookService} from './services/book.service';
import {BooksWebHeaderComponent} from './books-web-header-component/books-web-header.component';
import {BooksWebFooterComponent} from './books-web-footer.component';
import { EditComponent } from './books/edit/edit.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksWebFooterComponent,
    BooksWebHeaderComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,  //most important angular module to enable component rendering
    FormsModule,
    CommonModule,
    //responsible for angular Single Page Routing design
    //You must load the RouterModule and supply the route information to be used
    //all functinalities are included
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
 
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
