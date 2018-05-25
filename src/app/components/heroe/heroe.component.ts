import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  @Input()
  heroe:any

  constructor() {}
}
