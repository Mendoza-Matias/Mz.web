import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PlansComponent } from '../plans/plans.component';
import { EntrepreneurshipService } from '../../api/entrepreneurship.service';
import { Service } from '../../models/services-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone : true,
  imports: [CommonModule,CardComponent, PlansComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  serviceList: Service[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private service: EntrepreneurshipService) {}
  
  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.loading = true;
    this.service.getAllServices().subscribe({
      next: (services) => {
        this.serviceList = services;
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
