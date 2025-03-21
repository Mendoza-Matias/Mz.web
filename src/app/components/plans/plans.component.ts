import { Component, Input } from '@angular/core';
import { PlanCardComponent } from '../plan-card/plan-card.component';
import { FooterComponent } from '../footer/footer.component';
import { Plan } from '../../models/plan-model';
import { EntrepreneurshipService } from '../../api/entrepreneurship.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule,PlanCardComponent, FooterComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  planList: Plan[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private service: EntrepreneurshipService) { }

  ngOnInit(): void {
    this.getPlans();
  }

  getPlans(): void {
    this.loading = true;
    this.service.getAllPlans().subscribe({
      next: (services) => {
        this.planList = services;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los servicios';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
