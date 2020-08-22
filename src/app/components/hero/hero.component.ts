import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroe: any = {};


  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {

      this.heroe = this._heroesService.getHero( params.id);

    });
   }

  ngOnInit(): void {
  }

}
