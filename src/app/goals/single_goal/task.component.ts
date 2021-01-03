import {Component, Input, OnInit} from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/task';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
    selector: 'task',
    templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit{
    @Input() task: ITask;
    colors = null;

    constructor(private colorsService: ColorsService) {

    }

    ngOnInit() {
        this.colors = this.colorsService.getDarkTheme();
    }
}