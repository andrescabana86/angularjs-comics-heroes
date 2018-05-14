import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  private heroes:any
  
  constructor(private _heroesService:HeroesService) {
    this.heroes = this._heroesService.getHeroes()
  }

}
