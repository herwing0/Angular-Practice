import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-heroes',
  templateUrl: './card-heroes.component.html',
  styleUrls: ['./card-heroes.component.css']
})
export class CardHeroesComponent implements OnInit {
  // tslint:disable-next-line: variable-name
 @Input() heroes: any[] = [];
 @Input() index: number;
 @Output() heroeSeleccionado: EventEmitter<number>;




  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService,
               private router: Router){
                 this.heroeSeleccionado = new EventEmitter();

              }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

    console.log( this.heroes);
  }

  // tslint:disable-next-line: typedef
  verHeroe(){
    // console.log( this.index);
    // this.router.navigate( ['/hero', this.index]);
    this.heroeSeleccionado.emit( this.index );

  }


  // tslint:disable-next-line: typedef
  // verHeroe( idx: number ){
  //   this.router.navigate( ['/hero', idx]);
  // }
  // }


}
