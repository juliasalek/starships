import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanBattleComponent } from './human-battle.component';
import { StarWarsApiService } from '../../../services';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Human } from '../../../interfaces';
import { HumanCardComponent } from '../human-card';

const testHuman2: Human = {
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

const testHuman: Human = {
  birth_year: '1990',
  eye_color: 'blue',
  films: ['Film 1', 'Film 2'],
  gender: 'male',
  hair_color: 'brown',
  height: '175 cm',
  homeworld: 'Earth',
  mass: '70 kg',
  name: 'All Doe',
  skin_color: 'fair',
  created: '2023-10-07T12:00:00Z',
  edited: '2023-10-07T12:00:00Z',
  species: ['Species 1', 'Species 2'],
  starships: ['Starship 1', 'Starship 2'],
  url: 'https://example.com/human/1',
  vehicles: ['Vehicle 1', 'Vehicle 2'],
};

describe('HumanBattleComponent', () => {
  let fixture: ComponentFixture<HumanBattleComponent>;
  let component: HumanBattleComponent;
  let apiService: jasmine.SpyObj<StarWarsApiService>;

  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('StarWarsApiService', [
      'getHumanById',
    ]);

    TestBed.configureTestingModule({
      declarations: [HumanBattleComponent],
      imports: [MatCardModule, MatIconModule],
      providers: [{ provide: StarWarsApiService, useValue: apiServiceSpy }],
    });

    fixture = TestBed.createComponent(HumanBattleComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(
      StarWarsApiService
    ) as jasmine.SpyObj<StarWarsApiService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
