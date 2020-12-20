import { Injectable } from '@angular/core';
import { IGoal } from '../shared/interfaces/goal';

@Injectable()
export class GoalsService {
  getGoals() {
    return GOALS;
  }
}

const GOALS: IGoal[] = [
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
