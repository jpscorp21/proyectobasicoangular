import { Component } from '@angular/core';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `      
      <h1>Pagina Funcionando</h1>
      <router-outlet></router-outlet>    
  `,
})
export class PagesComponent {}
