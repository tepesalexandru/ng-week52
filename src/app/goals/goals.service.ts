import {Injectable} from '@angular/core';

@Injectable()
export class GoalsService {
    getGoals() {
        return GOALS;
    }
}

const GOALS = [
    "Learn Angular",
    "Learn Design Patterns"
]