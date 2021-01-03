import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGoal } from 'src/app/shared/interfaces/goal';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { GoalsService } from '../goals.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css'],
})
export class CreateGoalComponent implements OnInit {
  colors: any;
  label: string;
  minutesRequired: string;

  constructor(
    private colorsService: ColorsService,
    private goalsService: GoalsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.colors = this.colorsService.getDarkTheme();
  }

  createGoal(formValues) {
    const goal: IGoal = {
      id: uuidv4(),
      label: formValues.label,
      tasks: []
    };

    this.goalsService.createGoal(goal);
    this.router.navigate(['/']);
  }
}
