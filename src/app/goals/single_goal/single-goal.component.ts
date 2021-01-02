import {Component, Input} from '@angular/core';
import { IGoal } from 'src/app/shared/interfaces/goal';

@Component({
    selector: 'single-goal',
    templateUrl: './single-goal.component.html'
})
export class SingleGoalComponent {
    @Input() goal: IGoal;
}