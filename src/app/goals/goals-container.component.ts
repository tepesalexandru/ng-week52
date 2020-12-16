import {Component, OnInit} from '@angular/core';
import { GoalsService } from './goals.service';
import {IGoal} from '../shared/interfaces/goal';

@Component({
    selector: 'goal-container',
    templateUrl: './goal-container.component.html'
})
export class GoalsContainer implements OnInit{

    goals: IGoal[] = [];

    constructor(private goalsService: GoalsService) {

    }

    ngOnInit() {
        this.goals = this.goalsService.getGoals();
    }
}