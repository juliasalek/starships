import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsBattleComponent } from './starships-battle.component';

describe('StarshipsBattleComponent', () => {
  let component: StarshipsBattleComponent;
  let fixture: ComponentFixture<StarshipsBattleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipsBattleComponent]
    });
    fixture = TestBed.createComponent(StarshipsBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
