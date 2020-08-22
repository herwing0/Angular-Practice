import { Injectable } from '@angular/core';


@Injectable()
export class HeroesService{

  private heroes: Heroe[] = [
    {
      nombre: "Antimage",
      bio: "Anti-Mage is a fast melee agility hero with an emphasis on disrupting and killing high-mana enemies. He has notably high agility and low base attack time. ",
      img: "assets/img/antimage.jpg",
      aparicion: "1941-11-01",
      casa: "Radiant"
    },
    {
      nombre: "Bane",
      bio: "Atropos, the Bane Elemental (or simply Bane), is a ranged intelligence hero whose dark and nightmarish abilities give him prowess as a disabler, ganker.",
      img: "assets/img/bane.jpg",
      aparicion: "1939-05-01",
      casa: "Dire"
    },
    {
      nombre: "Invoker",
      bio: "Carl, the Invoker, is a ranged intelligence hero who is very difficult to master. He is unique in that he possesses a total of 14 abilities in his arsenal;.",
      img: "assets/img/invoker.jpg",
      aparicion: "1964-01-01",
      casa: "Radiant"
    },
    {
      nombre: "Juggernaut",
      bio: "Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of slashes.",
      img: "assets/img/juggernaut.jpg",
      aparicion: "1962-05-01",
      casa: "Radiant"
    },
    {
      nombre: "Sun WuKong",
      bio: "Sun Wukong, the Monkey King, is a melee agility hero, best known for his slippery nature and his ability to do Mischief, deceiving his enemies by turning into trees",
      img: "assets/img/monkeyking.jpg",
      aparicion: "1940-06-01",
      casa: "Radiant"
    },
    {
      nombre: "Void",
      bio: "Darkterror, the Faceless Void, is a melee agility hero played as an offlaner or carry. Given a little time, he becomes a terrifying hero capable of destroying entire teams.",
      img: "assets/img/void.jpg",
      aparicion: "1962-08-01",
      casa: "Dire"
    },
    {
      nombre: "Ember Spirit",
      bio: "Xin, the Ember Spirit, is a highly mobile and versatile melee agility hero whose abilities make him a slippery foe who can dance around his enemies at will.",
      img: "assets/img/xinspirit.jpg",
      aparicion: "1974-11-01",
      casa: "Radiant"
    }
  ];


  constructor() {
    console.log('We ready');
   }


   getHeroes(){
     return this.heroes;
   }

   getHero( idx: string ){
    return this.heroes[idx];
  }

  buscarHeroes(termino: string){
    let heroesArr: Heroe[] = [ ];
    termino = termino.toLowerCase();

    for ( let heroe of this.heroes ){

      let nombre = heroe.nombre.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0){

        heroesArr.push( heroe )
      }
    }
    return heroesArr ;
   }

}






export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;

}
