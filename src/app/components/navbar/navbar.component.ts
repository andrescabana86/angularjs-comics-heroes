import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  search:string = ''

  constructor(private _Router:Router) {}

  buscarHeroe() {
    this._Router.navigate(['/heroes', this.search])
  }

}
