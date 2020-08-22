import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeroesComponent } from './card-heroes.component';

describe('CardHeroesComponent', () => {
  let component: CardHeroesComponent;
  let fixture: ComponentFixture<CardHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
