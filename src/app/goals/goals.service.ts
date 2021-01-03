import { Injectable } from '@angular/core';
import { IGoal } from '../shared/interfaces/goal';
import { ITask } from '../shared/interfaces/task';

@Injectable()
export class GoalsService {
  GOALS: IGoal[] = [];

  getGoals(): IGoal[] {
    if (this.GOALS.length === 0) {
      this.GOALS = JSON.parse(localStorage.getItem('allGoals'));
      if (this.GOALS === null) {
        this.GOALS = [];
      }
    }
    return this.GOALS;
  }

  getGoal(id: string): IGoal {
    return this.GOALS.find(goal => goal.id === id);
  }

  createGoal(goal: IGoal): void {
    this.GOALS.push(goal);
    this.saveGoals();
  }

  createTask(goalId: string, task: ITask): void {
    const index = this.GOALS.findIndex(goal => goal.id === goalId);
    this.GOALS[index].tasks.push(task);
    this.saveGoals();
  }

  saveGoals(): void {
    localStorage.setItem('allGoals', JSON.stringify(this.GOALS));
  }

  estimateGoal(goalId: string): number {
    const index = this.GOALS.findIndex(goal => goal.id === goalId);
    let requiredTime = 0;
    this.GOALS[index].tasks.forEach(task => {
      requiredTime = +requiredTime + +task.minutesRequired;
    });
    return requiredTime;
  }
}
