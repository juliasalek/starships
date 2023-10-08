import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanBattleComponent } from './human-battle.component';

describe('HumanBattleComponent', () => {
  let component: HumanBattleComponent;
  let fixture: ComponentFixture<HumanBattleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanBattleComponent]
    });
    fixture = TestBed.createComponent(HumanBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
