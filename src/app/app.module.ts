import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// RUTAS
import { APP_ROUTING} from './app.routes';


// SERVICIOS

import { HeroesService } from './services/heroes.service';

// COMPONENTES

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SomethingComponent } from './components/shared/something/something.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { CardHeroesComponent } from './components/card-heroes/card-heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SomethingComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchComponent,
    CardHeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
