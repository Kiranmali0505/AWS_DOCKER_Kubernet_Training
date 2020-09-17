import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-booksweb-header></app-booksweb-header>
  <div class='content container' >

      <router-outlet></router-outlet>
      
      
  </div>
  <app-booksweb-footer></app-booksweb-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
}
