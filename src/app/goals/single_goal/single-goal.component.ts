import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGoal } from 'src/app/shared/interfaces/goal';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
    selector: 'single-goal',
    templateUrl: './single-goal.component.html'
})
export class SingleGoalComponent implements OnInit{
    goal: IGoal;
    colors = null;

    constructor(private route: ActivatedRoute, private colorsService: ColorsService) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.goal = data['goal'];
        });
        console.log("goal", this.goal);
        this.colors = this.colorsService.getDarkTheme();
    }
}