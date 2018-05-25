import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {
  private heroes:any
  
  constructor(private _heroesService:HeroesService,
    private _Router:Router,
    private _activatedRoute:ActivatedRoute) {

    this._activatedRoute.params.subscribe(params => {
      this.fetchHeroes(params['heroe'])
    })
  }

  fetchHeroes(heroe) {
    this.heroes = this._heroesService.getHeroes(heroe)
  }

}
