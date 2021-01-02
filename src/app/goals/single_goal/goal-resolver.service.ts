import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { GoalsService } from '../goals.service';

@Injectable()
export class GoalResolver implements Resolve<any> {
    constructor(private goalsService: GoalsService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.goalsService.getGoal(route.params['id']);
    }
}