import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
    templateUrl: './create-goal.component.html',
    styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent implements OnInit {

    colors: any;

    constructor(private colorsService: ColorsService) {

    }

    ngOnInit() {
        this.colors = this.colorsService.getDarkTheme();
    }
}