import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { StarWarsApiService } from './star-wars-api.service';
import { Human } from '../interfaces';

const testHuman: Human = {
  birth_year: '1990',
  eye_color: 'blue',
  films: ['Film 1', 'Film 2'],
  gender: 'male',
  hair_color: 'brown',
  height: '175 cm',
  homeworld: 'Earth',
  mass: '70 kg',
  name: 'John Doe',
  skin_color: 'fair',
  created: '2023-10-07T12:00:00Z',
  edited: '2023-10-07T12:00:00Z',
  species: ['Species 1', 'Species 2'],
  starships: ['Starship 1', 'Starship 2'],
  url: 'https://example.com/human/1',
  vehicles: ['Vehicle 1', 'Vehicle 2'],
};

const testStarship = {
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
  films: []
};

describe('StarWarsApiService', () => {
  let service: StarWarsApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StarWarsApiService],
    });

    service = TestBed.inject(StarWarsApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a human by ID', () => {
    const mockHumanResponse = {
      result: {
        properties: testHuman,
      },
    };

    service.getHumanById('1').subscribe((human) => {
      expect(human.name).toBe('John Doe');
      expect(human.mass).toBe('70 kg');
    });

    const req = httpTestingController.expectOne(
      `https://www.swapi.tech/api/people/${'1'}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockHumanResponse);
  });

  // it('should get a starship by ID', () => {
  //   const mockStarshipResponse = {
  //     result: {
  //       properties: { testStarship },
  //     },
  //   };
  //   const testId = '12';

  //   service.getStarshipById(testId).subscribe((starship) => {
  //     expect(starship.name).toBe('X-wing');
  //   });

  //   const req = httpTestingController.expectOne(
  //     `https://www.swapi.tech/api/starships/${testId}`
  //   );
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockStarshipResponse);
  // });

  it('should handle HTTP error', () => {
    const testId = '1';

    service.getHumanById(testId).subscribe(
      (human) => {
        fail('Expected an error, but received a response');
      },
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpTestingController.expectOne(
      `https://www.swapi.tech/api/people/${testId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });
});
