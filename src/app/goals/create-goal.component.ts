import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorsService } from '../shared/services/colors.service';

@Component({
    selector: 'create-goal-card',
    templateUrl: './create-goal-card.component.html',
    styleUrls: ['./goal.component.css']
})

export class CreateGoalCardComponent implements OnInit {
    colors = null;
    constructor(private colorsService: ColorsService, private router: Router) { }

    ngOnInit() { 
        this.colors = this.colorsService.getDarkTheme();
    }

    goToAddGoal() {
        this.router.navigate(['create']);
    }
}