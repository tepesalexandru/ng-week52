import { Component, Input } from '@angular/core';
import {IGoal} from '../shared/interfaces/goal';

@Component({
  selector: 'goal',
  templateUrl: './goal.component.html',
})
export class GoalComponent {
  @Input() goal: IGoal;
}
