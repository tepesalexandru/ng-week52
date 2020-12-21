import { Routes } from '@angular/router';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { GoalsContainer } from './goals/goals-container.component';


export const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateGoalComponent,
  },
  {
    path: '',
    component: GoalsContainer,
  },
];
