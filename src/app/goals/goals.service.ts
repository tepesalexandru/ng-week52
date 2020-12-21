import { Injectable } from '@angular/core';
import { IGoal } from '../shared/interfaces/goal';

@Injectable()
export class GoalsService {
  GOALS: IGoal[] = [];

  getGoals(): IGoal[] {
    if (this.GOALS.length === 0) {
      this.GOALS = JSON.parse(localStorage.getItem('allGoals'));
    }
    return this.GOALS;
  }

  createGoal(goal: IGoal): void {
    this.GOALS.push(goal);
    this.saveGoals();
  }

  saveGoals(): void {
    localStorage.setItem('allGoals', JSON.stringify(this.GOALS));
  }
}
