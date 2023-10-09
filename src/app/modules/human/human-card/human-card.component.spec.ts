import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCardComponent } from './human-card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Human } from '../../../interfaces';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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

describe('HumanCardComponent', () => {
  let component: HumanCardComponent;
  let fixture: ComponentFixture<HumanCardComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanCardComponent],
      imports: [MatCardModule, MatIconModule, MatBadgeModule],
    });
    fixture = TestBed.createComponent(HumanCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the human name', () => {
    const component = fixture.componentInstance;
    component.human = testHuman;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.human-card-title');
    expect(element.textContent).toContain('John Doe');
  });

  it('should apply badge position correctly', () => {
    component.badgePosition = 'before';
    component.human = testHuman;
    fixture.detectChanges();
    const badge = debugElement.query(By.css('.mat-badge'));
    expect(badge).toBeTruthy();
  });
});
