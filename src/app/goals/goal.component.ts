import { Component, Input, OnInit } from '@angular/core';
import { IGoal } from '../shared/interfaces/goal';
import { ColorsService } from '../shared/services/colors.service';

@Component({
  selector: 'goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  @Input() goal: IGoal;

  colors = null;

  constructor(private colorsService: ColorsService) {}

  ngOnInit() {
    this.colors = this.colorsService.getDarkTheme();
  }
}
