import {Component, OnInit} from '@angular/core';
import { GoalsService } from './goals.service';

@Component({
    selector: 'goal-container',
    templateUrl: './goal-container.component.html'
})
export class GoalsContainer implements OnInit{

    goals = [];

    constructor(private goalsService: GoalsService) {

    }

    ngOnInit() {
        this.goals = this.goalsService.getGoals();
    }
}