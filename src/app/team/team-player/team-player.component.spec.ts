import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlayerComponent } from './team-player.component';

describe('TeamPlayerComponent', () => {
  let component: TeamPlayerComponent;
  let fixture: ComponentFixture<TeamPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
