import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  @Input()
  heroe:any

  constructor() {}

  ngOnInit() {
    console.log(this.heroe)
  }
}
