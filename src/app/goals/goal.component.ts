import { Component, Input } from '@angular/core';

@Component({
  selector: 'goal',
  templateUrl: './goal.component.html',
})
export class GoalComponent {
  @Input() goal;
}
