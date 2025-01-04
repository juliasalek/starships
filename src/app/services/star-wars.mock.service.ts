import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Human, Starship } from '../interfaces';

@Injectable()
export class StarWarsMockService {
  constructor() {}

  public getHumanById(id: string = '2'): Observable<Human> {
    return of({
      birth_year: '1990',
      eye_color: 'blue',
      films: ['Film 1', 'Film 2'],
      gender: 'male',
      hair_color: 'brown',
      height: '175 cm',
      homeworld: 'Earth',
      mass: '80 kg',
      name: 'All Doe',
      skin_color: 'fair',
      created: '2023-10-07T12:00:00Z',
      edited: '2023-10-07T12:00:00Z',
      species: ['Species 1', 'Species 2'],
      starships: ['Starship 1', 'Starship 2'],
      url: 'https://example.com/human/1',
      vehicles: ['Vehicle 1', 'Vehicle 2'],
    });
  }

  getStarshipById(): Observable<Starship> {
    return of({
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
    });
  }
}
