import { Routes } from '@angular/router';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { GoalsContainer } from './goals/goals-container.component';
import { GoalResolver } from './goals/single_goal/goal-resolver.service';
import { SingleGoalComponent } from './goals/single_goal/single-goal.component';


export const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateGoalComponent,
  },
  {
    path: 'goal/:id',
    component: SingleGoalComponent,
    resolve: {
      goal: GoalResolver
    }
  },
  {
    path: '',
    component: GoalsContainer,
  },
];
