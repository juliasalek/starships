import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StarshipCardComponent } from './starship-card.component';
import { Starship } from '../../../interfaces';

const testStarship: Starship = {
  model: 'T-65 X-wing',
  starship_class: 'Starfighter',
  manufacturer: 'Incom Corporation',
  cost_in_credits: '149999',
  length: '12.5',
  crew: '1',
  passengers: '0',
  max_atmosphering_speed: '1050',
  hyperdrive_rating: '1.0',
  MGLT: '100',
  cargo_capacity: '110',
  consumables: '1 week',
  pilots: [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/9',
    'https://www.swapi.tech/api/people/18',
    'https://www.swapi.tech/api/people/19',
  ],
  created: '2020-09-17T17:55:06.604Z',
  edited: '2020-09-17T17:55:06.604Z',
  name: 'X-wing',
  url: 'https://www.swapi.tech/api/starships/12',
  films: [],
};

describe('StarshipCardComponent', () => {
  let fixture: ComponentFixture<StarshipCardComponent>;
  let component: StarshipCardComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipCardComponent],
      imports: [MatCardModule, MatBadgeModule],
    });

    fixture = TestBed.createComponent(StarshipCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the human name', () => {
    const component = fixture.componentInstance;
    component.starship = testStarship;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.starship-card-title');
    expect(element.textContent).toContain('X-wing');
  });

  it('should apply badge position correctly', () => {
    component.starship = testStarship;
    component.badgePosition = 'before';
    fixture.detectChanges();

    const badge = debugElement.query(By.css('.mat-badge'));
    expect(badge).toBeTruthy();
  });
});
