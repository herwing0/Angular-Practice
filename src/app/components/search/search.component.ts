import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  router: any;

  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _heroesService: HeroesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.termino =  (params.termino);
      this.heroes = this._heroesService.buscarHeroes( params.termino);

    });
  }

  // tslint:disable-next-line: typedef
  verHeroe(idx: number){
    this.router.navigate( ['/hero', idx]);

 }

}
