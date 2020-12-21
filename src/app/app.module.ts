import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './appRoutes';

import { AppComponent } from './app.component';
import { GoalComponent } from './goals/goal.component';
import { GoalsContainer } from './goals/goals-container.component';

import { GoalsService } from './goals/goals.service';
import { ColorsService } from './shared/services/colors.service';
import { NavbarComponent } from './nav/navbar.component';
import { CreateGoalCardComponent } from './goals/create-goal.component';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    GoalComponent,
    GoalsContainer,
    CreateGoalCardComponent,
    CreateGoalComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [GoalsService, ColorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
