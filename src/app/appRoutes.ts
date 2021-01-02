import { Routes } from '@angular/router';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { GoalsContainer } from './goals/goals-container.component';
import { SingleGoalComponent } from './goals/single_goal/single-goal.component';


export const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateGoalComponent,
  },
  {
    path: 'goal/:id',
    component: SingleGoalComponent
  },
  {
    path: '',
    component: GoalsContainer,
  },
];
