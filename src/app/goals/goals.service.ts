import { Injectable } from '@angular/core';
import { IGoal } from '../shared/interfaces/goal';

@Injectable()
export class GoalsService {

  GOALS: IGoal[] = [
    {
      label: 'Learn Angular',
      minutesRequired: 450,
    },
    {
      label: 'Learn Design Patterns',
      minutesRequired: 165,
    },
    {
      label: 'Improve Week52 Project',
      minutesRequired: 160
    }
  ];

  getGoals() {
    return this.GOALS;
  }

  createGoal(goal: IGoal) {
    this.GOALS.push(goal);
  }
}


