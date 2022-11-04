import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesRoutineComponent } from './exercises-routine.component';

describe('ExercisesRoutineComponent', () => {
  let component: ExercisesRoutineComponent;
  let fixture: ComponentFixture<ExercisesRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesRoutineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisesRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
