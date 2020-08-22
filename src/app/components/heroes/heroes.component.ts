import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { CardHeroesComponent } from '../card-heroes/card-heroes.component';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService,
               private router: Router ) { }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

    console.log( this.heroes);
  }

  // tslint:disable-next-line: typedef
   verHeroe(idx: number){
      this.router.navigate( ['/hero', idx]);

   }

}
