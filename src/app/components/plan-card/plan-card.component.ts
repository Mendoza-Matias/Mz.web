import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  imports: [],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss'
})
export class PlanCardComponent {
  @Input() plan_name: String = '';
  @Input() subtitle: String = '';
  @Input() description: String = '';

}
