import { Component, OnInit } from '@angular/core';
import { IGoal } from 'src/app/shared/interfaces/goal';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { GoalsService } from '../goals.service';

@Component({
    templateUrl: './create-goal.component.html',
    styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent implements OnInit {

    colors: any;
    label: string;
    minutesRequired: string;
    

    constructor(private colorsService: ColorsService, private goalsService: GoalsService) {

    }

    ngOnInit() {
        this.colors = this.colorsService.getDarkTheme();
    }

    createGoal(formValues) {
        const goal: IGoal = {
            label: formValues.label,
            minutesRequired: formValues.minutesRequired
        };

        this.goalsService.createGoal(goal);
    }
}