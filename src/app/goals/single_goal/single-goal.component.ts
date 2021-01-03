import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGoal } from 'src/app/shared/interfaces/goal';
import { ITask } from 'src/app/shared/interfaces/task';
import { ColorsService } from 'src/app/shared/services/colors.service';
import {v4 as uuidv4} from 'uuid';
import { GoalsService } from '../goals.service';

@Component({
    selector: 'single-goal',
    templateUrl: './single-goal.component.html'
})
export class SingleGoalComponent implements OnInit{
    goal: IGoal;
    colors = null;

    addMode = false;
    newLabel: string;
    newMinutesRequired: number;

    constructor(private route: ActivatedRoute, private colorsService: ColorsService, private goalsService: GoalsService) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.goal = data['goal'];
        });
        console.log("goal", this.goal);
        this.colors = this.colorsService.getDarkTheme();
    }

    switchMode(): void {
        this.addMode = !this.addMode;
    }

    createTask(formValues): void {
        const newTask: ITask = {
          id: uuidv4(),
          label: formValues.label,
          tasks: [],
          minutesRequired: formValues.minutesRequired
        };

        this.goalsService.createTask(this.goal.id, newTask);
        // this.goalsService.createGoal(goal);
        // this.router.navigate(['/']);
      }

      estimate(): number {
          return this.goalsService.estimateGoal(this.goal.id);
      }
}