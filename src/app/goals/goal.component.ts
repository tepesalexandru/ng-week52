import { Component, Input } from '@angular/core';
import {IGoal} from '../shared/interfaces/goal';

@Component({
  selector: 'goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  @Input() goal: IGoal;
}
