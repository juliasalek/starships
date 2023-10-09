import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { StarWarsApiService } from '../../../services';
import { StarshipsBattleComponent } from './starships-battle.component';
import { MatIconModule } from '@angular/material/icon';

describe('StarshipsBattleComponent', () => {
  let fixture: ComponentFixture<StarshipsBattleComponent>;
  let component: StarshipsBattleComponent;
  let apiService: jasmine.SpyObj<StarWarsApiService>;

  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('StarWarsApiService', [
      'getStarshipById',
    ]);

    TestBed.configureTestingModule({
      declarations: [StarshipsBattleComponent],
      imports: [MatCardModule, MatIconModule],
      providers: [{ provide: StarWarsApiService, useValue: apiServiceSpy }],
    });

    fixture = TestBed.createComponent(StarshipsBattleComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(
      StarWarsApiService
    ) as jasmine.SpyObj<StarWarsApiService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
