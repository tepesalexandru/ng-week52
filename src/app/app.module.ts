import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalComponent } from './goals/goal.component';
import { GoalsContainer } from './goals/goals-container.component';
import {GoalsService} from './goals/goals.service';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalsContainer
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
