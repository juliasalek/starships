import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCardComponent } from './human-card.component';
import { Human } from 'src/app/services/star-wars-api-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanCardComponent],
      imports: [MatButtonModule, MatCardModule, MatIconModule, MatBadgeModule],
    });
    fixture = TestBed.createComponent(HumanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the human name', () => {
    const component = fixture.componentInstance;
    component.human = { ...testHuman};
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.human-name');
    expect(element.textContent).toContain('John Doe');
  });

  it('should set the badge position', () => {
    const component = fixture.componentInstance;
    component.badgePosition = 'before';
    fixture.detectChanges();

    const badgeElement = fixture.nativeElement.querySelector('.badge');
    expect(badgeElement.getAttribute('matBadgePosition')).toBe('before');
  });

  it('should display the counter', () => {
    const component = fixture.componentInstance;
    component.counter = 42;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.counter');
    expect(element.textContent).toContain('42');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the human name', () => {
    const component = fixture.componentInstance;
    component.human = testHuman;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.human-name');
    expect(element.textContent).toContain('John Doe');
  });

  it('should set the badge position', () => {
    const component = fixture.componentInstance;
    component.badgePosition = 'before';
    fixture.detectChanges();

    const badgeElement = fixture.nativeElement.querySelector('.badge');
    expect(badgeElement.getAttribute('matBadgePosition')).toBe('before');
  });

  it('should display the counter', () => {
    const component = fixture.componentInstance;
    component.counter = 42;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.counter');
    expect(element.textContent).toContain('42');
  });
});
