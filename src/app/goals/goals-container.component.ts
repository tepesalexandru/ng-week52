import {Component, OnInit} from '@angular/core';
import { GoalsService } from './goals.service';
import {IGoal} from '../shared/interfaces/goal';

@Component({
    selector: 'goal-container',
    templateUrl: './goal-container.component.html',
    styleUrls: ['./goal.component.css']
})
export class GoalsContainer implements OnInit{

    goals: IGoal[] = [];

    constructor(private goalsService: GoalsService) {

    }

    ngOnInit() {
        this.goals = this.goalsService.getGoals();
    }
}